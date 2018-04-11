import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Set } from '../set';
import { PokeAPI } from '../pokemon';
import { PokemonService } from './pokemon.service';
import { Move } from '../move';
import { MoveService } from './move.service';

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
    result.setId = 1;
    result.pokemonId = pkmn.id;
    result.nickname = pkmn.name;
    result.atk1 = pkmn.attackIds[0];
    result.atk2 = pkmn.attackIds[1];
    result.atk3 = pkmn.attackIds[2];
    result.atk4 = pkmn.attackIds[3];

    return result;
  }

  pokeTeamToSetTeam(pkmnArray: PokeAPI[]): Set[] {
    let result: Set;
    const resultArray = [];

    for (const pkmn of pkmnArray) {
      result = new Set();
      result.setId = 1;
      result.pokemonId = pkmn.id;
      result.nickname = pkmn.name;
      result.atk1 = pkmn.attackIds[0];
      result.atk2 = pkmn.attackIds[1];
      result.atk3 = pkmn.attackIds[2];
      result.atk4 = pkmn.attackIds[3];
      resultArray.push(result);
    }
    return resultArray;
  }

  setToPokeapi(set: Set, trainerID: number): PokeAPI {
    const result = new PokeAPI();
    const pkmn = this.pokedex[set.pokemonId - 1]; // Minus 1 because we're zero-indexed and the pokedex is not

    result.attackIds[0] = set.atk1;
    result.attackIds[1] = set.atk2;
    result.attackIds[2] = set.atk3;
    result.attackIds[3] = set.atk4;
    result.id = set.pokemonId;
    result.moves = pkmn.moves;
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

  setTeamToPokeTeam(setArray: Set[], trainerID: number): PokeAPI[] {
    let pkmn: PokeAPI;
    let result: PokeAPI;
    const resultArray = [];

    for (const set of setArray) {
      pkmn = this.pokedex[result.id - 1]; // Minus 1 because we're zero-indexed and the pokedex is not
      result = new PokeAPI();

      result.attackIds[0] = set.atk1;
      result.attackIds[1] = set.atk2;
      result.attackIds[2] = set.atk3;
      result.attackIds[3] = set.atk4;
      result.id = set.pokemonId;
      result.moves = pkmn.moves;
      result.moveset[0] = this.movedex[set.atk1].name;
      result.moveset[1] = this.movedex[set.atk2].name;
      result.moveset[2] = this.movedex[set.atk3].name;
      result.moveset[3] = this.movedex[set.atk4].name;
      result.name = pkmn.name;
      result.sprite = pkmn.sprite;
      result.stats = pkmn.stats;
      result.trainerId = trainerID;
      result.types = pkmn.types;
      resultArray.push(result);
    }
    return resultArray;
  }

}
