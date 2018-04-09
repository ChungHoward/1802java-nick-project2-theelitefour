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
    this.pkmn1.trainerId = 1;
    this.pkmn1.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';
    this.pkmn1.types = ['electric', 'none'];
    this.pkmn1.attackIds = [85, 42, 24, 86];
    this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
    this.pkmn1.stats = {hp: 65, atk: 65, def: 60, satk: 110, sdef: 110, spe: 130};

    this.pkmn2.name = 'Exeggutor';
    this.pkmn2.trainerId = 1;
    this.pkmn2.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
    this.pkmn2.types = ['grass', 'psychic'];
    this.pkmn2.attackIds = [79, 115, 94, 153];
    this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
    this.pkmn2.stats = {hp: 95, atk: 95, def: 85, satk: 125, sdef: 125, spe: 55};

    this.pkmn3.name = 'Moltres';
    this.pkmn3.trainerId = 1;
    this.pkmn3.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
    this.pkmn3.types = ['fire', 'flying'];
    this.pkmn3.attackIds = [97, 83, 126, 63];
    this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
    this.pkmn3.stats = {hp: 90, atk: 100, def: 90, satk: 125, sdef: 125, spe: 90};

    this.pkmn4.name = 'Slowbro';
    this.pkmn4.trainerId = 1;
    this.pkmn4.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
    this.pkmn4.types = ['water', 'psychic'];
    this.pkmn4.attackIds = [133, 57, 94, 115];
    this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
    this.pkmn4.stats = {hp: 65, atk: 75, def: 110, satk: 80, sdef: 80, spe: 30};

    this.pkmn5.name = 'Chansey';
    this.pkmn5.trainerId = 1;
    this.pkmn5.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
    this.pkmn5.types = ['normal', 'none'];
    this.pkmn5.attackIds = [85, 58, 68, 135];
    this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Soft-boiled'];
    this.pkmn5.stats = {hp: 250, atk: 5, def: 5, satk: 105, sdef: 105, spe: 50};

    this.pkmn6.name = 'Gengar';
    this.pkmn6.trainerId = 1;
    this.pkmn6.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
    this.pkmn6.types = ['ghost', 'poison'];
    this.pkmn6.attackIds = [85, 72, 109, 153];
    this.pkmn6.moveset = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];
    this.pkmn6.stats = {hp: 60, atk: 65, def: 60, satk: 130, sdef: 130, spe: 110};

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
