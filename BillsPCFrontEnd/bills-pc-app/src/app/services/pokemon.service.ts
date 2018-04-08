import { Injectable, OnInit } from '@angular/core';
import { PokeAPI } from '../pokemon';
import { TypeService } from 'app/services/type.service';

@Injectable()
export class PokemonService implements OnInit {

  pokedex: Array<PokeAPI>;

  types: TypeService;

  constructor() {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

  }

  ngOnInit() {
  }

}
