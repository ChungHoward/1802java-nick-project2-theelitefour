import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Move } from '../move';

@Injectable()
export class MoveService {

    constructor(private http: HttpClient) {}

    getJson(url: string) {
        return this.http.get<Move>(url);
    }

}
