import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean>{
    const body = new HttpParams().set('username', username).set('password', password);
    return this.http.post<boolean>('login', body);
  }

}
