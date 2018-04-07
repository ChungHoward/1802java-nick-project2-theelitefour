import { Component, OnInit } from '@angular/core';
import { Filter } from 'app/pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';
import { Pokemon } from 'app/pokemon';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';

@Component({
  selector: 'app-pokemonbox',
  templateUrl: './pokemonbox.component.html',
  styleUrls: ['./pokemonbox.component.css']
})
export class PokemonBoxComponent implements OnInit {
  // The Pokemon we just clicked on
  selectedPkmn: Pokemon;
  // My favorite team - there can only be one
  favTeam: Array<Pokemon>;
  // The service where I make 6 sample pokemon for temporary use
  teamService: TeamService;
  // Contains the images for every type and damage class
  types: TypeService;
  // The team being built or viewed
  curTeam: Array<Pokemon>;
  // Will temporarily contain a list of pokemon in my box
  myBox: Array<Pokemon>;
  // Will temporarily contain a list of teams, currently can't be named
  myTeams: Array<Array<Pokemon>>;

  /* These variables are for the Box View/Search */
  pkmnBoxColNames: Array<string>;
  colSortIcons: Array<string>;
  sortBy: string;
  ascending: boolean;
  searchInput: string;

  constructor() {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    /* Assign my favTeam using teamService */
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;
    this.curTeam = new Array<Pokemon>();
    this.myBox = new Array<Pokemon>();
    this.myBox.fill(this.teamService.pkmn1, 0, 5); // give myself some pokemon
    this.myBox.fill(this.teamService.pkmn6, 6, 10);
    this.myTeams = new Array<Array<Pokemon>>();
    this.myTeams.fill(this.teamService.favTeam, 0, 3); // give myself some favTeams

    this.pkmnBoxColNames = ['name', 'type', 'move 1', 'move 2', 'move 3', 'move 4'];
    this.colSortIcons = [ // The icon underneath each pkmnBoxColNames
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
    ];
    this.sortBy = 'name';
    this.ascending = true;

  }

  /**
   * Switches all other column icons to swap_vert, then toggles the clicked icon,
   * then changes the sorting strategy
   * @param i the column index to sort
   */
  toggleSort(i: number) {
    if (this.colSortIcons[i] === 'swap_vert') {
      for (let k = 0; k < this.colSortIcons.length; k++) {
        this.colSortIcons[k] = 'swap_vert';
      }
      this.colSortIcons[i] = 'arrow_drop_down';
      this.ascending = false;
    } else if (this.colSortIcons[i] === 'arrow_drop_down') {
      for (let k = 0; k < this.colSortIcons.length; k++) {
        this.colSortIcons[k] = 'swap_vert';
      }
      this.colSortIcons[i] = 'arrow_drop_up';
      this.ascending = true;
    } else if (this.colSortIcons[i] === 'arrow_drop_up') {
      for (let k = 0; k < this.colSortIcons.length; k++) {
        this.colSortIcons[k] = 'swap_vert';
      }
      this.colSortIcons[i] = 'arrow_drop_down';
      this.ascending = false;
    }
    this.sortBy = this.pkmnBoxColNames[i];
  }

  ngOnInit() {
  }

}
