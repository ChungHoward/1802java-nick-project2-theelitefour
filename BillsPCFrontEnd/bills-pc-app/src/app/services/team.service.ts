import { Injectable, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { TypeService } from 'app/services/type.service';

@Injectable()
export class TeamService implements OnInit {

  favTeam: Array<Pokemon>;
  pkmn1: Pokemon;
  pkmn2: Pokemon;
  pkmn3: Pokemon;
  pkmn4: Pokemon;
  pkmn5: Pokemon;
  pkmn6: Pokemon;

  types: TypeService;

  constructor() {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Making my team
    this.pkmn1 = new Pokemon();
    this.pkmn2 = new Pokemon();
    this.pkmn3 = new Pokemon();
    this.pkmn4 = new Pokemon();
    this.pkmn5 = new Pokemon();
    this.pkmn6 = new Pokemon();

    this.pkmn1.name = 'Jolteon';
    this.pkmn1.types = ['electric', 'none'];
    this.pkmn1.stats = [65, 65, 60, 110, 110, 130];
    this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
    this.pkmn1.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';

    this.pkmn2.name = 'Exeggutor';
    this.pkmn2.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
    this.pkmn2.types = ['grass', 'psychic'];
    this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
    this.pkmn2.stats = [95, 95, 85, 125, 125, 55];

    this.pkmn3.name = 'Moltres';
    this.pkmn3.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
    this.pkmn3.types = ['fire', 'flying'];
    this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
    this.pkmn3.stats = [90, 100, 90, 125, 125, 90];

    this.pkmn4.name = 'Slowbro';
    this.pkmn4.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
    this.pkmn4.types = ['water', 'psychic'];
    this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
    this.pkmn4.stats = [65, 75, 110, 80, 80, 30];

    this.pkmn5.name = 'Chansey';
    this.pkmn5.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
    this.pkmn5.types = ['normal', 'none'];
    this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'];
    this.pkmn5.stats = [250, 5, 5, 105, 105, 50];

    this.pkmn6.name = 'Gengar';
    this.pkmn6.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
    this.pkmn6.types = ['ghost', 'poison'];
    this.pkmn6.moveset = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];
    this.pkmn6.stats = [60, 65, 60, 130, 130, 110];

    this.favTeam = new Array<Pokemon>();
    this.favTeam.push(this.pkmn1);
    this.favTeam.push(this.pkmn2);
    this.favTeam.push(this.pkmn3);
    this.favTeam.push(this.pkmn4);
    this.favTeam.push(this.pkmn5);
    this.favTeam.push(this.pkmn6);

  }

  ngOnInit() { }

}
