import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { Types } from '../services/type.service';
import { PokeAPI } from '../pokemon';

declare interface Pokemon {
  name: string;
  types: Array<string>;
  stats: Array<number>;
  moveset: Array<string>;
  sprite_url: string;
}
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

  id: string;
  myPokemon: PokeAPI;
  pkmn: Pokemon;
  favTeam: Array<Pokemon>;
  pokeService: PokemonService;
  types: Types;

  constructor() {
    this.types = new Types();

    this.pkmn = {
      name: 'Jolteon', types: [this.types.electric, this.types.none],  stats: [65, 65, 60, 110, 110, 130],
      moveset: ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'],
      sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png'
    };
    this.favTeam.push(this.pkmn);
    this.pkmn = {
      name: 'Exeggutor', types: [this.types.grass, this.types.psychic],  stats: [95, 95, 85, 125, 125, 55],
      moveset: ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'],
      sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png'
    };
    this.favTeam.push(this.pkmn);
    this.pkmn = {
      name: 'Moltres', types: [this.types.fire, this.types.flying],  stats: [90, 100, 90, 125, 125, 90],
      moveset: ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'],
      sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png'
    };
    this.favTeam.push(this.pkmn);
    this.pkmn = {
      name: 'Slowbro', types: [this.types.water, this.types.psychic],  stats: [65, 75, 110, 80, 80, 30],
      moveset: ['Amnesia', 'Surf', 'Psychic', 'Reflect'],
      sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png'
    };
    this.favTeam.push(this.pkmn);
    this.pkmn = {
      name: 'Chansey', types: [this.types.normal, this.types.none],  stats: [250, 5, 5, 105, 105, 50],
      moveset: ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'],
      sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png'
    };
    this.favTeam.push(this.pkmn);
    this.pkmn = {
      name: 'Gengar', types: [this.types.ghost, this.types.poison],  stats: [60, 65, 60, 130, 130, 110],
      moveset: ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'],
      sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
    };
    this.favTeam.push(this.pkmn);
    /*
    this.favTeam = [
      {
        name: 'Jolteon', types: [types.electric, types.none],  stats: [65, 65, 60, 110, 110, 130],
        moveset: ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'],
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png'
      }, {
        name: 'Exeggutor', types: [types.grass, types.psychic],  stats: [95, 95, 85, 125, 125, 55],
        moveset: ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'],
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png'
      }, {
        name: 'Moltres', types: [types.fire, types.flying],  stats: [90, 100, 90, 125, 125, 90],
        moveset: ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'],
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png'
      }, {
        name: 'Slowbro', types: [types.water, types.psychic],  stats: [65, 75, 110, 80, 80, 30],
        moveset: ['Amnesia', 'Surf', 'Psychic', 'Reflect'],
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png'
      }, {
        name: 'Chansey', types: [types.normal, types.none],  stats: [250, 5, 5, 105, 105, 50],
        moveset: ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'],
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png'
      }, {
        name: 'Gengar', types: [types.ghost, types.poison],  stats: [60, 65, 60, 130, 130, 110],
        moveset: ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'],
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
      }
    ];*/
  }

  getPokemon() {
    this.pokeService.getPokemon(String(this.id)).subscribe(data => this.myPokemon = data);
  }

  ngOnInit() { }

}
