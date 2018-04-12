import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Set } from '../set';
import { Team } from '../team';

@Injectable()
export class UpdateService {

  constructor(private http: HttpClient) { }

  saveSet(mySet: Set) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const body = JSON.stringify(mySet);
    if (mySet.setId < 0) {
      return this.http.post('set', body);
    } else {
      return this.http.put('set', body);
    }
  }

  private createSet(mySet: Set) {
    const body = new HttpParams().set('set', JSON.stringify(mySet));
    return this.http.post('set', body);
  }

  private updateSet(mySet: Set) {
    const body = new HttpParams().set('set', JSON.stringify(mySet));
    return this.http.put('set', body);
  }

  saveTeam(myTeam: Team) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // const body = new HttpParams().set('team', JSON.stringify(myTeam));
    if (myTeam.teamId === -1) {
      return this.http.post('team', JSON.stringify(myTeam), headers);
    } else {
      return this.http.put('team', JSON.stringify(myTeam), headers);
    }
  }

}
