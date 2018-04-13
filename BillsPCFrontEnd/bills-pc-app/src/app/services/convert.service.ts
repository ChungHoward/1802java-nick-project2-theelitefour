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

  // pokedex: Array<PokeAPI>;
  // movedex: Array<Move>;

  constructor(private pokemonService: PokemonService, private moveService: MoveService) {
    // Observable.forkJoin(
    //   this.pokemonService.getJson(),
    //   this.moveService.getJson()
    // ).subscribe(
    //   ([pokeAPIArray, moveArray]) => {
    //     this.pokedex = pokeAPIArray;
    //     this.movedex = moveArray;
    //   }
    // );
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
    result.trainer = {'trainerId': pkmn.trainerId};

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

    myTeam.trainer = {'trainerId': pkmnArray[0].trainerId};

    myTeam.set1 = pkmnArray[0] ? this.pokeapiToSet(pkmnArray[0]) : null;
    myTeam.set2 = pkmnArray[1] ? this.pokeapiToSet(pkmnArray[1]) : null;
    myTeam.set3 = pkmnArray[2] ? this.pokeapiToSet(pkmnArray[2]) : null;
    myTeam.set4 = pkmnArray[3] ? this.pokeapiToSet(pkmnArray[3]) : null;
    myTeam.set5 = pkmnArray[4] ? this.pokeapiToSet(pkmnArray[4]) : null;
    myTeam.set6 = pkmnArray[5] ? this.pokeapiToSet(pkmnArray[5]) : null;

    return myTeam;
  }

  setToPokeapi(set: Set, trainerID: number, pokedex: Array<PokeAPI>, movedex: Array<Move>): PokeAPI {
    const result = new PokeAPI();
    const pkmn = pokedex[set.pokemonId - 1]; // Minus 1 because we're zero-indexed and the pokedex is not

    result.attackIds = [];
    result.attackIds[0] = set.atk1;
    result.attackIds[1] = set.atk2;
    result.attackIds[2] = set.atk3;
    result.attackIds[3] = set.atk4;
    result.id = set.pokemonId;
    result.setId = set.setId;
    result.moves = pkmn.moves;
    result.moveset = [];
    result.moveset[0] = movedex[(set.atk1) ? set.atk1 - 1 : 164].name;
    result.moveset[1] = movedex[(set.atk2) ? set.atk2 - 1 : 164].name;
    result.moveset[2] = movedex[(set.atk3) ? set.atk3 - 1 : 164].name;
    result.moveset[3] = movedex[(set.atk4) ? set.atk4 - 1 : 164].name;
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
  teamToPokeTeam(myTeam: Team, trainerID: number, pokedex: Array<PokeAPI>, movedex: Array<Move>): PokeAPI[] {
    let result: PokeAPI;
    const resultArray = [];

    console.log("--- starting teamToPokeTeam --- ");
    console.log("p1 ID - " + myTeam.set1.pokemonId);
    console.log("p2 ID - " + myTeam.set2.pokemonId);
    console.log("p3 ID - " + myTeam.set3.pokemonId);
    console.log("p4 ID - " + myTeam.set4.pokemonId);
    console.log("p5 ID - " + myTeam.set5.pokemonId);
    console.log("p6 ID - " + myTeam.set6.pokemonId);

    // Find my pokemon in the pokedex using (id - 1) because we're zero-indexed and the pokedex is not
    result = Object.assign(pokedex[myTeam.set1.pokemonId - 1]);

    // These fields are being provided by the pokedex and do not need to be set

    if (myTeam.set1) {
      resultArray.push(this.setToPokeapi(myTeam.set1, trainerID, pokedex, movedex));
    }
    if (myTeam.set2) {
      resultArray.push(this.setToPokeapi(myTeam.set2, trainerID, pokedex, movedex));
    }
    if (myTeam.set3) {
      resultArray.push(this.setToPokeapi(myTeam.set3, trainerID, pokedex, movedex));
    }
    if (myTeam.set4) {
      resultArray.push(this.setToPokeapi(myTeam.set4, trainerID, pokedex, movedex));
    }
    if (myTeam.set5) {
      resultArray.push(this.setToPokeapi(myTeam.set5, trainerID, pokedex, movedex));
    }
    if (myTeam.set6) {
      resultArray.push(this.setToPokeapi(myTeam.set6, trainerID, pokedex, movedex));
    }

    return resultArray;
  }

}
