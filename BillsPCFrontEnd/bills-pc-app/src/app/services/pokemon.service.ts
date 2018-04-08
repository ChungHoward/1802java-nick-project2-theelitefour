import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeAPI } from '../pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get<Array<PokeAPI>>('assets/pokeAPI.json');
  }

}
