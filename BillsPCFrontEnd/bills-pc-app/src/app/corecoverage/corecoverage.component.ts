import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'app/pokemon';
import { PokemonService } from 'app/services/pokemon.service';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-corecoverage',
  templateUrl: './corecoverage.component.html',
  styleUrls: ['./corecoverage.component.css'],
  providers: [PokemonService, TeamService, TypeService]
})
export class CoreCoverageComponent implements OnInit {
  /* These variables are for the Team View at the top of the page, and some other stuff */
  // The 6 pokemon on my team
  favTeam: Array<Pokemon>;
  // This service generates 6 sample pokemon for me
  teamService: TeamService;
  // Contains the image for every type and damage class
  types: TypeService;

  // This is the Pokemon we selected
  selectedPkmn: Pokemon;

  questionSprite: string; // image for when no pokemon is selected. no, it's not missingno

  // The list of pokemon that are good partners for favTeam
  partners: Array<Array<string>>;

  constructor(private pokemonService: PokemonService) {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Assign my favTeam using teamService
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;

    // My default selected Pokemon
    this.selectedPkmn = this.favTeam[0];

    // this can be used as a placeholder image before searching for a pokemon
    this.questionSprite = 'assets/img/question.png';
  }

  /**
   * Gets a list of pokemon for each member of your team that resists all the weaknesses of another pokemon of your team
   * @return a 2-D array of Pokemon names.
   * [x][y] x=the pokemon at that index of your team. y=names of partners that resist the weaknesses of x.
   * @param numResist The minimum number of resistances the user considers a good partner to have
   */
  checkCoreCoverage(numResist: number) {
    let myWeaknesses: Array<number>;
    let type1ID: number, type2ID: number;
    let myResist: number;
    let partners: Array<Array<string>>; // Just the Pokemon's name is fine;
    partners = [];

    // Begin the forbidden O(n^3) loop
    for (const pkmn of this.favTeam) {
      myWeaknesses = new Array<number>();
      // get pkmn's types
      type1ID = this.types.name.indexOf(pkmn.types[0]);
      type2ID = this.types.name.indexOf(pkmn.types[1]);
      // Find attacks that are super-effective against my type
      for (let i = 0; i < this.types.chart.length; i++) {
        // chart[A][D], A=attack type, D=defending type -- if the multiplier is higher than 1, the move is super effective
        if (this.types.chart[i][type1ID] * this.types.chart[i][type2ID] > 1) {
          // add the super effective move ID to myWeaknesses
          myWeaknesses.push(i);
        }
      }
      // now that we have pkmn's weaknesses -- check if any teammates resists all (or some) of those weaknesses
      for (const teammate of this.favTeam) {
        // get teammate's types
        type1ID = this.types.name.indexOf(teammate.types[0]);
        type2ID = this.types.name.indexOf(teammate.types[1]);
        myResist = 0;
        // Check to see if a teammate resists every weakness of pkmn, or up to numResist
        for (const weakness of myWeaknesses) {
          // if the multiplier is < 1, then this teammate resists pkmn's weakness.
          if (this.types.chart[weakness][type1ID] * this.types.chart[weakness][type2ID] < 1) {
            myResist++;
          }
        }
        partners.push(new Array<string>());
        // if teammate's number of resistances is less than the user specified threshold in the param,
        // or teammate resists every weakness of pkmn, then teammate is a partner
        if (myResist >= numResist || myResist === myWeaknesses.length) {

          // hacky way of getting the index of my team rather than using an index variable in my for loop because I don't plan ahead
          partners[this.favTeam.indexOf(pkmn)].push(teammate.name);
        }
      }
    } // outer for loop
    this.partners = partners;
  }

  ngOnInit() {
    this.checkCoreCoverage(5);
  }

}
