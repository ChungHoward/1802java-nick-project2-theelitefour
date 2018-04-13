import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(username: string, password: string, email: string, role: string): Observable<boolean> {
    const body = new HttpParams().set('username', username).set('password', password).set('email', email).set('role', role);
    return this.http.post<boolean>('register', body);
  }
}
