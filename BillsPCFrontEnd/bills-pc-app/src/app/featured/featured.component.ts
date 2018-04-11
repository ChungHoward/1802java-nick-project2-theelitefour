import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatureService } from '../services/feature.service';
import { Team } from '../team';
import { Set } from '../set';
import { PokeAPI } from '../pokemon';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featTeamArray: Array<Team>;

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.featureService.getFeaturedTeams().subscribe(response => {
      this.featTeamArray = response;
      console.log(this.featTeamArray.toString());

      // if the Array is not empty, we should turn the sets inside into pokemon
      if (this.featTeamArray) {
        // do something
      }
    }, error => {
      console.error(error);
    });
  }

}
