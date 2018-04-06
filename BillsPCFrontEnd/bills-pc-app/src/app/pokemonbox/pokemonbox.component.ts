import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'app/pokemon';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';

@Component({
  selector: 'app-pokemonbox',
  templateUrl: './pokemonbox.component.html',
  styleUrls: ['./pokemonbox.component.css']
})
export class PokemonBoxComponent implements OnInit {
  /* These variables are for the Team View at the top of the page, and some other stuff */
  // The 6 pokemon on my team
  favTeam: Array<Pokemon>;
  // This service generates 6 sample pokemon for me
  teamService: TeamService;
  // Contains the image for every type and damage class
  types: TypeService;

  constructor() { }

  ngOnInit() {
  }

}
