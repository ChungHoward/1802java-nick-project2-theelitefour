import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Filter } from 'app/pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';
import { Pokemon, PokeAPI } from 'app/pokemon';
import { Trainer } from '../trainer';
import { Set } from '../set';
import { Team } from '../team';
import { Move } from '../move';
import { MoveService } from 'app/services/move.service';
import { PokemonService } from 'app/services/pokemon.service';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';
import { ConvertService } from '../services/convert.service';
import { LoginService } from '../services/login.service';
import { UpdateService } from '../services/update.service';
declare var $: any;

@Component({
  selector: 'app-pokemonbox',
  templateUrl: './pokemonbox.component.html',
  styleUrls: ['./pokemonbox.component.css'],
  providers: [
    MoveService, PokemonService, TeamService, TypeService,
    ConvertService, LoginService, UpdateService
  ]
})
export class PokemonBoxComponent implements OnInit {
  // The Pokemon we just clicked on
  selectedPkmn: PokeAPI;
  // My favorite team - there can only be one
  favTeam: Array<PokeAPI>;
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

  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;

  /* These variables are for the pill buttons */
  favoriteIcon: string;
  newTeamName: string;

  constructor(
    private updateService: UpdateService, private convertService: ConvertService,
    private loginService: LoginService, private pokemonService: PokemonService,
    private moveService: MoveService, private teamService: TeamService,
    private types: TypeService) {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Assign my favTeam using teamService
    // this.favTeam = this.teamService.favTeam;


    // Unimplemented
    this.myTeams = new Array<Array<PokeAPI>>();

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
    this.favTeam = new Array<PokeAPI>();
  }

  loadTeam() {
    let myTeams: Team[];
    let myTrainer: Trainer;
    myTrainer = JSON.parse(localStorage.getItem('trainer'));

    // if user is logged in
    if (myTrainer) {
      // Get my team
      myTeams = JSON.parse(localStorage.getItem('teams'));
      // Convert our team into a format our back-end can receive
      if (myTeams[0]) {
        this.favTeam = this.convertService.teamToPokeTeam(myTeams[0], myTrainer.trainerId, this.pokedex, this.movedex);
      }
    } else {
      // if no one is logged in
      this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
      // if null, get an empty team
      if (!this.favTeam) {
        this.favTeam = new Array<PokeAPI>();
      }
    }
  }

  loadBox() {
    // Get my team
    this.myBox = new Array<PokeAPI>();
    const mySets = JSON.parse(localStorage.getItem('sets')) as Array<Set>;
    const myTrainer = JSON.parse(localStorage.getItem('trainer')) as Trainer;

    // if user is logged in
    if (myTrainer && mySets) {
      // Convert our team into a format our back-end can receive
      for (const set of mySets) {
        this.myBox.push(this.convertService.setToPokeapi(set, myTrainer.trainerId, this.pokedex, this.movedex));
      }
    } else {
      if (localStorage.getItem('myPkmnBox')) {
        this.myBox = JSON.parse(localStorage.getItem('myPkmnBox')) as Array<PokeAPI>;
      } else {
        this.myBox.push(this.teamService.pkmn5);
      }
      // give myself a pokemon because for some reason ng2-dnd does not work with empty arrays
    }
  }

  /**
   * Adds the curTeam to myTeams and sets the team name to newTeamName
   * @param newTeamName saves as 'Untitled' if newTeamName is empty
   */
  saveTeam(newTeamName: string): boolean {
    // if our team isn't over the legal limit
    if (this.favTeam.length <= 6) {
      const myTeam = [];
      const myTrainer = JSON.parse(localStorage.getItem('trainer')) as Trainer;

      // User must be logged in to save team
      if (myTrainer) {
        // We need the old team ID of the ONLY (SINGULAR) team we are saving
        const oldTeam = JSON.parse(localStorage.getItem('teams')) as Team[];
        // Convert our team into a format our back-end can receive
        myTeam[0] = this.convertService.pokeTeamToSetTeam(this.favTeam, newTeamName, oldTeam[0].teamId);
        // Save our team to localstorage
        this.loginService.changeTeam(myTeam);
        // Send http request to save set and team if the user is logged in
        this.updateService.saveTeam(myTeam[0]).subscribe();
      }
      // Put our favTeam in local storage so even an unregistered user can use our service
      localStorage.setItem('favTeam', JSON.stringify(this.favTeam));
      localStorage.setItem('myPkmnBox', JSON.stringify(this.myBox));
      // Add the team to my currently unused array of teams
      this.myTeams.push(this.favTeam);

      return true;
    }
    this.showNotification('The maximum team size is 6 Pokemon');
    return false;
  }

  /**
   * Unimplemented
   * Assigns the curTeam as favTeam and sets favTeam's name to newTeamName
   * @param newTeamName saves as 'Untitled' if newTeamName is empty
   */
  setFavoriteTeam(newTeamName: string) {
    this.favTeam = this.favTeam;
    this.favoriteIcon = 'star';
    if (newTeamName.length < 1) {
      newTeamName = 'Untitled';
    }
    // set favTeam.name = newTeamName;
  }

  showNotification(myMessage: string) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];
    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notification',
      message: myMessage
    }, {
        type: 'warning',
        timer: 4000,
        placement: {
          from: 'top',
          align: 'center'
        }
      }
    );
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

  // Only works if favorite feature gets implemented
  ngOnInit() {
    Observable.forkJoin(
      this.pokemonService.getJson(),
      this.moveService.getJson()
    ).subscribe(
      ([pokeAPIArray, moveArray]) => {
        this.pokedex = pokeAPIArray;
        this.movedex = moveArray;

        this.loadBox();
        // Assign my favTeam using localStorage or from session if one exists
        this.loadTeam();
      }
    );
    if (this.favTeam === this.favTeam) {
      this.favoriteIcon = 'star';
    } else {
      this.favoriteIcon = 'star_border';
    }
  }

}
