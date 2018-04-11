import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Trainer } from '../trainer';

@Injectable()
export class LoginService {

  private trainerSource = new BehaviorSubject<Trainer>(JSON.parse(localStorage.getItem('trainer')));
  currentTrainer = this.trainerSource.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Trainer> {
    const body = new HttpParams().set('username', username).set('password', password);
    return this.http.post<Trainer>('login', body);
  }

  logout(): Observable<boolean> {
    localStorage.clear(); // Seems important yeah?
    return this.http.get<boolean>('logout');
  }

  changeTrainer(trainer: Trainer) {
    this.trainerSource.next(trainer);
  }
}
