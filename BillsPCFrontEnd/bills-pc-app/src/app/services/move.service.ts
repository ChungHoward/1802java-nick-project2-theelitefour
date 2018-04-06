import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Move } from '../move';

@Injectable()
export class MoveService {

    readonly url = 'https://pokeapi.co/api/v2/move/';

    myMove: Move;
    http: HttpClient;
    handler: HttpHandler;

    constructor() {
        this.http = new HttpClient(this.handler);
    }

    getMove(name: string) {
        return this.http.get<Move>(this.url + name);
    }

}
