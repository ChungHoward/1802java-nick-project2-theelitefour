import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';

@Injectable()
export class PokemonService {

    readonly url = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) {}

    getPokemon(id: string) {
        return this.http.get<Pokemon>(this.url + id);
    }

}
