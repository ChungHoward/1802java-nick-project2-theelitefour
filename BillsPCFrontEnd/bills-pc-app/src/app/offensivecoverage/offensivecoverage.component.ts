import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Rx';
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
  coveredTypes: Array<Array<string>>;
  uncoveredTypes: Array<Array<string>>;

  constructor(private pokemonService: PokemonService, private moveService: MoveService, private types: TypeService) {
    // Assign my favTeam using teamService
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;
    // Initialize
    this.teamMoveTypes = new Array<string>();
    this.uniqueTypes = new Array<Array<string>>();
    this.coveredTypes = new Array<Array<string>>();
    this.uncoveredTypes = new Array<Array<string>>();
  }

  // Among all 151 pokemon, get only the unique type combinations
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
    }, error => {
      console.error(error);
    });
  }

  // get an array of unique damaging types of attacks on our team
  getTeamMoveTypes() {
    let detailedMove: Move;
    // for each pokemon on my team
    for (const pkmn of this.favTeam) {
      // for each attack they know
      loop1:
      for (let i = 0; i < pkmn.attackIds.length; i++) {
        detailedMove = this.movedex[pkmn.attackIds[i] - 1];
        // if that attack deals damage
        if (detailedMove.power > 0) {
          // always add it to our list of damaging move types if our list is empty
          if (this.teamMoveTypes.length > 0) {
            // We don't want duplicates. if one exists, check the next attack
            for (const type of this.teamMoveTypes) {
              if (type === detailedMove.type) {
                continue loop1;
              }
            } // add unique type to our array if there are no dupes
            this.teamMoveTypes.push(detailedMove.type);
          } else {
            // I subtract 1 because our json is 1-indexed while arrays are 0-indexed
            this.teamMoveTypes.push(detailedMove.type);
          }
        }
      }
    }
  }

  compareOurMovesVsUniqueTypes() {
    let effective: number;
    let defType1: number;
    let defType2: number;

    // for each unique defending type combination
    loop1:
    for (const pairTypes of this.uniqueTypes) {
      // for each attack type on my team
      for (const atkType of this.teamMoveTypes) {
        // get the types of the defending pokemon
        defType1 = this.types.name.indexOf(pairTypes[0]);
        defType2 = this.types.name.indexOf(pairTypes[1]);
        console.log(this.types.chart[atkType]);
        // and see how effective my attack type is against every other pokemon
        effective = this.types.chart[atkType][defType1];
        effective *= this.types.chart[atkType][defType2];
        console.log(atkType + ' vs ' + defType1 + ' ' + defType2 + ' = ' + effective);
        // if our attack is super effective
        if (effective > 1) {
          // add it to our list of covered types
          this.coveredTypes.push(pairTypes);
          // then check a new type combination
          continue loop1;
        }
      }
    }
    // uncovered types is what remains of unique types excluding covered types
    this.uncoveredTypes = this.uniqueTypes.filter(
      (types) => !this.coveredTypes.includes(types)
    );
  }

  ngOnInit() {
    // this.getPokeAPIjson();
    // this.getMoveAPIjson();
    // the above methods are being replaced by the below method which calls both Observables
    // in parallel and waits for them to finish -- or apparently not
    Observable.forkJoin(
      this.pokemonService.getJson(),
      this.moveService.getJson()
    ).subscribe(
      ([pokeAPIArray, moveArray]) => {
      // results[0] is our result of first api call
      // results[1] is our result of second api call
      this.pokedex = pokeAPIArray;
      this.movedex = moveArray;

      // calling these functions here because this is the only location where
      // we can guarantee our pokedex and movedex have been fully loaded
      this.getUniqueTypes();
      this.getMoveAPIjson();
      this.getTeamMoveTypes();
      this.compareOurMovesVsUniqueTypes();
    });
  }

}
