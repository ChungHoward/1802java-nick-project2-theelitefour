import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Team } from '../team';

@Injectable()
export class FeatureService {

  private featTeamSource = new BehaviorSubject<Array<Team>>(JSON.parse(localStorage.getItem('featTeams')));
  featuredTeams = this.featTeamSource.asObservable();

  constructor(private http: HttpClient) { }

  getFeaturedTeams(): Observable<Array<Team>> {
    // const body = new HttpParams();
    return this.http.get<Array<Team>>('featured'); // , body);
  }

  changeFeaturedTeams(featTeams: Array<Team>) {
    this.featTeamSource.next(featTeams);
    localStorage.setItem('featTeams', JSON.stringify(featTeams));
  }

}
