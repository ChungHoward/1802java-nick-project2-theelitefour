import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  register(username: string, password: string, email: string): Observable<boolean> {
=======
  register(username: string, password: string, email: string): Observable<boolean>{
>>>>>>> staging
    const body = new HttpParams().set('username', username).set('password', password).set('email', email);
    return this.http.post<boolean>('register', body);
  }
}
