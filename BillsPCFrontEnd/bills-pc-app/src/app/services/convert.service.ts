import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Set } from '../set';
import { PokeAPI } from '../pokemon';
import { PokemonService } from './pokemon.service';
import { Move } from '../move';
import { MoveService } from './move.service';
import { Team } from '../team';

@Injectable()
export class ConvertService {

  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;

  constructor(private pokemonService: PokemonService, private moveService: MoveService) {
    Observable.forkJoin(
      this.pokemonService.getJson(),
      this.moveService.getJson()
    ).subscribe(
      ([pokeAPIArray, moveArray]) => {
        this.pokedex = pokeAPIArray;
        this.movedex = moveArray;
      }
    );
  }

  pokeapiToSet(pkmn: PokeAPI): Set {
    const result = new Set();
    if (pkmn.setId) {
      result.setId = pkmn.setId;
    } else {
      result.setId = -1;
    }
    result.pokemonId = pkmn.id;
    result.nickname = pkmn.name;
    result.atk1 = pkmn.attackIds[0];
    result.atk2 = pkmn.attackIds[1];
    result.atk3 = pkmn.attackIds[2];
    result.atk4 = pkmn.attackIds[3];

    return result;
  }

  /**
   * For some reason, my back end team didn't want to send me an array of Sets,
   * so I can't write a loop
   * @param pkmnArray The team to send to back-end
   * @param teamName The optional team name
   * @param teamID The original team ID if one exists
   */
  pokeTeamToSetTeam(pkmnArray: PokeAPI[], teamName?: string, teamID?: number): Team {
    let result: Set;
    const myTeam = new Team();
    const resultArray = [];

    if (teamID) {
      myTeam.teamId = teamID;
    } else {
      myTeam.teamId = -1;
    }
    if (teamName) {
      myTeam.teamName = teamName;
    } else {
      myTeam.teamName = 'Untitled';
    }
    result = new Set();
    result.setId = pkmnArray[0].setId;
    result.pokemonId = pkmnArray[0].id;
    result.nickname = pkmnArray[0].name;
    result.atk1 = pkmnArray[0].attackIds[0];
    result.atk2 = pkmnArray[0].attackIds[1];
    result.atk3 = pkmnArray[0].attackIds[2];
    result.atk4 = pkmnArray[0].attackIds[3];
    myTeam.set1 = result;

    result = new Set();
    result.setId = pkmnArray[1].setId;
    result.pokemonId = pkmnArray[1].id;
    result.nickname = pkmnArray[1].name;
    result.atk1 = pkmnArray[1].attackIds[0];
    result.atk2 = pkmnArray[1].attackIds[1];
    result.atk3 = pkmnArray[1].attackIds[2];
    result.atk4 = pkmnArray[1].attackIds[3];
    myTeam.set2 = result;

    result = new Set();
    result.setId = pkmnArray[2].setId;
    result.pokemonId = pkmnArray[2].id;
    result.nickname = pkmnArray[2].name;
    result.atk1 = pkmnArray[2].attackIds[0];
    result.atk2 = pkmnArray[2].attackIds[1];
    result.atk3 = pkmnArray[2].attackIds[2];
    result.atk4 = pkmnArray[2].attackIds[3];
    myTeam.set3 = result;

    result = new Set();
    result.setId = pkmnArray[3].setId;
    result.pokemonId = pkmnArray[3].id;
    result.nickname = pkmnArray[3].name;
    result.atk1 = pkmnArray[3].attackIds[0];
    result.atk2 = pkmnArray[3].attackIds[1];
    result.atk3 = pkmnArray[3].attackIds[2];
    result.atk4 = pkmnArray[3].attackIds[3];
    myTeam.set4 = result;

    result = new Set();
    result.setId = pkmnArray[4].setId;
    result.pokemonId = pkmnArray[4].id;
    result.nickname = pkmnArray[4].name;
    result.atk1 = pkmnArray[4].attackIds[0];
    result.atk2 = pkmnArray[4].attackIds[1];
    result.atk3 = pkmnArray[4].attackIds[2];
    result.atk4 = pkmnArray[4].attackIds[3];
    myTeam.set5 = result;

    result = new Set();
    result.setId = pkmnArray[5].setId;
    result.pokemonId = pkmnArray[5].id;
    result.nickname = pkmnArray[5].name;
    result.atk1 = pkmnArray[5].attackIds[0];
    result.atk2 = pkmnArray[5].attackIds[1];
    result.atk3 = pkmnArray[5].attackIds[2];
    result.atk4 = pkmnArray[5].attackIds[3];
    myTeam.set6 = result;

    return myTeam;
  }

  setToPokeapi(set: Set, trainerID: number): PokeAPI {
    const result = new PokeAPI();
    const pkmn = this.pokedex[set.pokemonId - 1]; // Minus 1 because we're zero-indexed and the pokedex is not

    result.attackIds = [];
    result.attackIds[0] = set.atk1;
    result.attackIds[1] = set.atk2;
    result.attackIds[2] = set.atk3;
    result.attackIds[3] = set.atk4;
    result.id = set.pokemonId;
    result.moves = pkmn.moves;
    result.moveset = [];
    result.moveset[0] = this.movedex[set.atk1].name;
    result.moveset[1] = this.movedex[set.atk2].name;
    result.moveset[2] = this.movedex[set.atk3].name;
    result.moveset[3] = this.movedex[set.atk4].name;
    result.name = pkmn.name;
    result.sprite = pkmn.sprite;
    result.stats = pkmn.stats;
    result.trainerId = trainerID;
    result.types = pkmn.types;

    return result;
  }

  /**
   * For some reason, my back end team didn't want to send me an array of Sets,
   * so I can't write a loop
   * @param myTeam The team to convert from
   * @param trainerID The owner of the team
   */
  teamToPokeTeam(myTeam: Team, trainerID: number): PokeAPI[] {
    let result: PokeAPI;
    const resultArray = [];

    // Find my pokemon in the pokedex using (id - 1) because we're zero-indexed and the pokedex is not
    result = Object.assign(this.pokedex[myTeam.set1.pokemonId - 1]);

    // These fields are being provided by the pokedex and do not need to be set
    // result.moves = pkmn.moves;
    // result.name = pkmn.name;
    // result.sprite = pkmn.sprite;
    // result.stats = pkmn.stats;
    // result.types = pkmn.types;
    // Pokemon 1
    result.id = myTeam.set1.pokemonId;
    result.setId = myTeam.set1.setId;
    result.trainerId = trainerID;
    result.attackIds = [];
    result.attackIds[0] = myTeam.set1.atk1;
    result.attackIds[1] = myTeam.set1.atk2;
    result.attackIds[2] = myTeam.set1.atk3;
    result.attackIds[3] = myTeam.set1.atk4;
    result.moveset = [];
    result.moveset[0] = this.movedex[myTeam.set1.atk1].name;
    result.moveset[1] = this.movedex[myTeam.set1.atk2].name;
    result.moveset[2] = this.movedex[myTeam.set1.atk3].name;
    result.moveset[3] = this.movedex[myTeam.set1.atk4].name;
    resultArray.push(result);

    // Pokemon 2
    result = Object.assign(this.pokedex[myTeam.set2.pokemonId - 1]);
    result.id = myTeam.set2.pokemonId;
    result.setId = myTeam.set2.setId;
    result.trainerId = trainerID;
    result.attackIds = [];
    result.attackIds[0] = myTeam.set2.atk1;
    result.attackIds[1] = myTeam.set2.atk2;
    result.attackIds[2] = myTeam.set2.atk3;
    result.attackIds[3] = myTeam.set2.atk4;
    result.moveset = [];
    result.moveset[0] = this.movedex[myTeam.set2.atk1].name;
    result.moveset[1] = this.movedex[myTeam.set2.atk2].name;
    result.moveset[2] = this.movedex[myTeam.set2.atk3].name;
    result.moveset[3] = this.movedex[myTeam.set2.atk4].name;
    resultArray.push(result);

    // Pokemon 3
    result = Object.assign(this.pokedex[myTeam.set3.pokemonId - 1]);
    result.id = myTeam.set3.pokemonId;
    result.setId = myTeam.set3.setId;
    result.trainerId = trainerID;
    result.attackIds = [];
    result.attackIds[0] = myTeam.set3.atk1;
    result.attackIds[1] = myTeam.set3.atk2;
    result.attackIds[2] = myTeam.set3.atk3;
    result.attackIds[3] = myTeam.set3.atk4;
    result.moveset = [];
    result.moveset[0] = this.movedex[myTeam.set3.atk1].name;
    result.moveset[1] = this.movedex[myTeam.set3.atk2].name;
    result.moveset[2] = this.movedex[myTeam.set3.atk3].name;
    result.moveset[3] = this.movedex[myTeam.set3.atk4].name;
    resultArray.push(result);

    // Pokemon 4
    result = Object.assign(this.pokedex[myTeam.set4.pokemonId - 1]);
    result.id = myTeam.set4.pokemonId;
    result.setId = myTeam.set4.setId;
    result.trainerId = trainerID;
    result.attackIds = [];
    result.attackIds[0] = myTeam.set4.atk1;
    result.attackIds[1] = myTeam.set4.atk2;
    result.attackIds[2] = myTeam.set4.atk3;
    result.attackIds[3] = myTeam.set4.atk4;
    result.moveset = [];
    result.moveset[0] = this.movedex[myTeam.set4.atk1].name;
    result.moveset[1] = this.movedex[myTeam.set4.atk2].name;
    result.moveset[2] = this.movedex[myTeam.set4.atk3].name;
    result.moveset[3] = this.movedex[myTeam.set4.atk4].name;
    resultArray.push(result);

    // Pokemon 5
    result = Object.assign(this.pokedex[myTeam.set5.pokemonId - 1]);
    result.id = myTeam.set5.pokemonId;
    result.setId = myTeam.set5.setId;
    result.trainerId = trainerID;
    result.attackIds = [];
    result.attackIds[0] = myTeam.set5.atk1;
    result.attackIds[1] = myTeam.set5.atk2;
    result.attackIds[2] = myTeam.set5.atk3;
    result.attackIds[3] = myTeam.set5.atk4;
    result.moveset = [];
    result.moveset[0] = this.movedex[myTeam.set5.atk1].name;
    result.moveset[1] = this.movedex[myTeam.set5.atk2].name;
    result.moveset[2] = this.movedex[myTeam.set5.atk3].name;
    result.moveset[3] = this.movedex[myTeam.set5.atk4].name;
    resultArray.push(result);

    // Pokemon 6
    result = Object.assign(this.pokedex[myTeam.set6.pokemonId - 1]);
    result.id = myTeam.set6.pokemonId;
    result.setId = myTeam.set6.setId;
    result.trainerId = trainerID;
    result.attackIds = [];
    result.attackIds[0] = myTeam.set6.atk1;
    result.attackIds[1] = myTeam.set6.atk2;
    result.attackIds[2] = myTeam.set6.atk3;
    result.attackIds[3] = myTeam.set6.atk4;
    result.moveset = [];
    result.moveset[0] = this.movedex[myTeam.set6.atk1].name;
    result.moveset[1] = this.movedex[myTeam.set6.atk2].name;
    result.moveset[2] = this.movedex[myTeam.set6.atk3].name;
    result.moveset[3] = this.movedex[myTeam.set6.atk4].name;
    resultArray.push(result);

    return resultArray;
  }

}
