import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeAPI, Stat } from 'app/pokemon';
import { Move } from '../move';
import { MoveService } from 'app/services/move.service';
import { PokemonService } from 'app/services/pokemon.service';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';

@Component({
  selector: 'app-offensivecoverage',
  templateUrl: './offensivecoverage.component.html',
  styleUrls: ['./offensivecoverage.component.css'],
  providers: [MoveService, PokemonService, TeamService, TypeService]
})
export class OffensiveCoverageComponent implements OnInit {
  // The placeholder 6 pokemon on my team
  favTeam: Array<Pokemon>;
  // This service generates 6 sample pokemon for me
  teamService: TeamService;
  // List of types of damaging moves
  teamMoveTypes: Array<string>;

  // Used for reading PokeAPI objects from json file
  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;
  // Used to test offensive coverage
  uniqueTypes: Array<Array<string>>;
  // Contains the image for every type and damage class
  types: TypeService;

  constructor(private pokemonService: PokemonService, private moveService: MoveService) {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Assign my favTeam using teamService
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;
    // Initialize
    this.teamMoveTypes = new Array<string>();
    this.pokedex = new Array<PokeAPI>();
    this.uniqueTypes = new Array<Array<string>>();
  }

  // The dreaded O(n^2) function
  getUniqueTypes() {
    const result = new Array<Array<string>>();
    // initialize array with at least one value to check
    result.push(this.pokedex[0].types);

    // for every pokemon in the pokedex
    loop1: for (const pkmn of this.pokedex) {
      // for every unique type discovered so far
      for (const type of result) {
        // if a pokemon's type1 and type2 has been discovered
        if ((pkmn.types[0] === type[0] && pkmn.types[1] === type[1]) ||
          (pkmn.types[0] === type[1] && pkmn.types[1] === type[0])) {
          continue loop1; // check the next pokemon
        }
      } // add unique type to result
      result.push([pkmn.types[0], pkmn.types[1]]);
    }
    this.uniqueTypes = result;
  }

  // Load 151 Pokemon into this.pokedex
  getPokeAPIjson() {
    this.pokemonService.getJson().subscribe(data => {
      this.pokedex = data as Array<PokeAPI>;
      // calling this function here because this is the only location where
      // we can guarantee our pokedex has been fully loaded
      this.getUniqueTypes();
    }, error => {
      console.error(error);
    });
  }

  /**
   * Reads json file created by pokeAPI, and edited by Howard by hand <--wtf
   * because the data was for gen7 and we needed gen1, then fills our movedex with 164 Moves
   */
  getMoveAPIjson() {
    this.moveService.getJson().subscribe(data => {
      this.movedex = data as Array<Move>;
      // calling this function here because this is the only location where
      // we can guarantee our movedex has been fully loaded
      this.getTeamMoveTypes();
    }, error => {
      console.error(error);
    });
  }

  getTeamMoveTypes() {
    // for each pokemon on my team
    for (const pkmn of this.favTeam) {
      // for each attack they know
      for (let i = 0; i < pkmn.attackIds.length; i++) {
        // subtract 1 because our json is 1-indexed while arrays are 0-indexed
        this.teamMoveTypes.push(this.movedex[pkmn.attackIds[i] - 1].type);

      }
    }
  }

  ngOnInit() {
    this.getPokeAPIjson();
    this.getMoveAPIjson();
  }

}
