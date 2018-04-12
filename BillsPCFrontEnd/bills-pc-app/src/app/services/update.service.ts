import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Set } from '../set';
import { Team } from '../team';

@Injectable()
export class UpdateService {

  constructor(private http: HttpClient) { }

  saveSet(mySet: Set) {
    if (mySet.setId < 0) {
      this.createSet(mySet);
    } else {
      this.updateSet(mySet);
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
    const body = new HttpParams().set('team', JSON.stringify(myTeam));
    return this.http.post('team', body);
  }

}
