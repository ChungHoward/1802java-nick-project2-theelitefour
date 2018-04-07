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

  /* These variables are for the pill buttons */
  favoriteIcon: string;
  newTeamName: string;

  constructor() {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    /* Assign my favTeam using teamService */
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;
    this.curTeam = new Array<Pokemon>();
    this.myBox = new Array<Pokemon>();
    this.myBox.push(this.teamService.pkmn1); // give myself some pokemon
    this.myBox.push(this.teamService.pkmn6);
    this.myBox.push(this.teamService.pkmn2);
    this.myBox.push(this.teamService.pkmn2);
    this.myBox.push(this.teamService.pkmn6);
    this.myBox.push(this.teamService.pkmn4);
    this.myBox.push(this.teamService.pkmn3);
    this.myBox.push(this.teamService.pkmn2);
    this.myBox.push(this.teamService.pkmn3);
    this.myTeams = new Array<Array<Pokemon>>();

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

  newTeam() {
    this.curTeam = new Array<Pokemon>();
  }

  /**
   * Adds the curTeam to myTeams and sets the team name to newTeamName
   * @param newTeamName saves as 'Untitled' if newTeamName is empty
   */
  saveTeam(newTeamName: string): boolean {
    if (this.curTeam.length === 6) {
      this.myTeams.push(this.curTeam);
      if (newTeamName.length < 1) {
        newTeamName = 'Untitled';
      }
      return true;
    }
    return false;
  }

  /**
   * Assigns the curTeam as favTeam and sets favTeam's name to newTeamName
   * @param newTeamName saves as 'Untitled' if newTeamName is empty
   */
  setFavoriteTeam(newTeamName: string) {
    if (this.saveTeam(newTeamName)) {
      this.favTeam = this.curTeam;
      this.favoriteIcon = 'star';
      if (newTeamName.length < 1) {
        newTeamName = 'Untitled';
      }
      // set favTeam.name = newTeamName;
    }
  }

  ngOnInit() {
    if (this.curTeam === this.favTeam) {
      this.favoriteIcon = 'star';
    } else {
      this.favoriteIcon = 'star_border';
    }
  }

}
