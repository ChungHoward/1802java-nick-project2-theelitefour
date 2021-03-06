import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Trainer } from '../trainer';
import { Set } from '../set';
import { Team } from '../team';

@Injectable()
export class LoginService {

  private trainerSource = new BehaviorSubject<Trainer>(JSON.parse(localStorage.getItem('trainer')));
  currentTrainer = this.trainerSource.asObservable();
  private setSource = new BehaviorSubject<Array<Set>>(JSON.parse(localStorage.getItem('sets')));
  currentSet = this.setSource.asObservable();
  private teamSource = new BehaviorSubject<Array<Team>>(JSON.parse(localStorage.getItem('teams')));
  currentTeam = this.teamSource.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<[Trainer, Array<Set>, Array<Team>]> {
    const body = new HttpParams().set('username', username).set('password', password);
    return this.http.post<[Trainer, Array<Set>, Array<Team>]>('login', body);
  }

  logout(): Observable<boolean> {
    localStorage.clear(); // Seems important yeah?
    return this.http.get<boolean>('logout');
  }

  changeTrainer(trainer: Trainer) {
    this.trainerSource.next(trainer);
    localStorage.setItem('trainer', JSON.stringify(trainer));
  }

  changeSets(sets: Array<Set>) {
    this.setSource.next(sets);
    localStorage.setItem('sets', JSON.stringify(sets));
  }

  changeTeam(team: Array<Team>) {
    this.teamSource.next(team);
    localStorage.setItem('teams', JSON.stringify(team));
  }
}
