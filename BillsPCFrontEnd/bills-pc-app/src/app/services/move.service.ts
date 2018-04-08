import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Move } from '../move';

@Injectable()
export class MoveService {

    readonly url = 'https://pokeapi.co/api/v2/move/';

    myMove: Move;

    constructor(private http: HttpClient) {}

    getMove(name: string): Observable<Move> {
        return this.http.get<Move>(this.url + name);
    }

}
