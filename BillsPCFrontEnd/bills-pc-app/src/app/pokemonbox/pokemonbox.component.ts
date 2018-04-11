import { Component, OnInit } from '@angular/core';
import { Filter } from 'app/pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';
import { Pokemon, PokeAPI } from 'app/pokemon';
import { Trainer } from '../trainer';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';

@Component({
  selector: 'app-pokemonbox',
  templateUrl: './pokemonbox.component.html',
  styleUrls: ['./pokemonbox.component.css']
})
export class PokemonBoxComponent implements OnInit {
  // The Pokemon we just clicked on
  selectedPkmn: PokeAPI;
  // My favorite team - there can only be one
  favTeam: Array<PokeAPI>;
  // Contains the images for every type and damage class
  types: TypeService;
  // The team being built or viewed
  curTeam: Array<PokeAPI>;
  // Will temporarily contain a list of pokemon in my box
  myBox: Array<PokeAPI>;
  // Will temporarily contain a list of teams, currently can't be named
  myTeams: Array<Array<PokeAPI>>;

  /* These variables are for the Box View/Search */
  pkmnBoxColNames: Array<string>;
  colSortIcons: Array<string>;
  sortBy: string;
  ascending: boolean;
  searchInput: string;

  /* These variables are for the pill buttons */
  favoriteIcon: string;
  newTeamName: string;

  constructor(private teamService: TeamService) {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Assign my favTeam using teamService
    // this.favTeam = this.teamService.favTeam;

    // Assign my favTeam using localStorage TODO: or from session if one exists
    this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
    // if null, get an empty team
    if (!this.favTeam) {
      this.favTeam = new Array<PokeAPI>();
    }
    this.curTeam = new Array<PokeAPI>();
    this.curTeam = Object.assign([], this.favTeam);
    this.myBox = new Array<PokeAPI>();
    this.myBox.push(this.teamService.pkmn1); // give myself some pokemon
    this.myBox.push(this.teamService.pkmn2);
    this.myBox.push(this.teamService.pkmn3);
    this.myBox.push(this.teamService.pkmn4);
    this.myBox.push(this.teamService.pkmn5);
    this.myBox.push(this.teamService.pkmn6);
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
    this.favTeam = new Array<Pokemon>();
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
    this.favTeam = this.curTeam;
    this.favoriteIcon = 'star';
    if (newTeamName.length < 1) {
      newTeamName = 'Untitled';
    }
    // set favTeam.name = newTeamName;
  }

  /**
   * When we drag and drop we should update our team
   */
  updateTeam(pkmn: PokeAPI, i: number) {
    console.log('drop team ' + pkmn.name + ' at index ' + i);
    // inserts pkmn at index i, deleting 0 elements
    // this.favTeam.splice(i, 0, pkmn);
    // removes pkmn from box
    // this.myBox.splice(this.myBox.indexOf(pkmn), 1);
  }

  /**
   * When we drag and drop we should update our box
   */
  updateBox(pkmn: PokeAPI, i: number) {
    console.log('drop box ' + pkmn.name + ' at index ' + i);
    // inserts pkmn at index i, deleting 0 elements
    // this.myBox.splice(i, 0, pkmn);
    // removes pkmn from box
    // this.favTeam.splice(this.favTeam.indexOf(pkmn), 1);
  }

  /**
   * Triggers when the save button is pressed
   */
  savePokemon() {
    let myTrainer: Trainer;
    myTrainer = JSON.parse(sessionStorage.getItem('trainer'));
    // wipe our selected Pokemon's old attacks
    this.selectedPkmn.attackIds = new Array<number>();
    this.selectedPkmn.moveset = new Array<string>();

    // If our trainer is logged in, assign trainer ID
    if (myTrainer) {
      this.selectedPkmn.trainerId = myTrainer.id;
    }
    // Save to box
    if (myTrainer) {
      myTrainer.sets.push(this.selectedPkmn);
    }
    // TODO: THIS IS WHERE I LEFT OFF YESTERDAY
    // Put our favTeam in local storage so even an unregistered user can use our service
    localStorage.setItem('favTeam', JSON.stringify(this.favTeam));
  }

  ngOnInit() {
    if (this.curTeam === this.favTeam) {
      this.favoriteIcon = 'star';
    } else {
      this.favoriteIcon = 'star_border';
    }
  }

}
