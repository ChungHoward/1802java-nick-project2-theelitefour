import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Trainer } from '../trainer';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ViewUserService {

  constructor(private http: HttpClient) { }

  viewUsers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>('view-user');
  }

  promoteUser(username: string): Observable<Trainer[]> {
    const body = new HttpParams().set('username', username);
    return this.http.post<Trainer[]>('view-user', body);
  }

}
