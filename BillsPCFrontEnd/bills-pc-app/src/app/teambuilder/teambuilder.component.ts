import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TitleCasePipe } from '@angular/common';
import { Filter } from 'app/pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';
import { PokeAPI, Stat } from 'app/pokemon';
import { Trainer } from '../trainer';
import { Move } from '../move';
import { Set } from '../set';
import { Team } from '../team';
import { LoginService } from '../services/login.service';
import { MoveService } from 'app/services/move.service';
import { PokemonService } from 'app/services/pokemon.service';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';
import { ConvertService } from 'app/services/convert.service';
import { UpdateService } from '../services/update.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.css'],
  providers: [
    MoveService, PokemonService, TeamService, TypeService,
    ConvertService, LoginService, UpdateService
  ]
})
export class TeambuilderComponent implements OnInit {
  // The 6 pokemon on my team
  favTeam: Array<PokeAPI>;
  // Our trainer's owned Pokemon from the server, if any
  sets: Array<Set>;
  // The Team from our server, if one exists
  myTeam: Team;
  // The current state of whether viewing your team's attacks are being shown or hidden
  expandOrCollapse: boolean;
  // The name of the icon that shows or hides your attacks
  collapse: string;

  /* These variables are for the selected Pokemon thing */
  selected: number;
  selectedPkmn: PokeAPI;
  selPkmnMoves: Array<Move>;

  /* These variables are for the Detailed Pokemon View/Search */
  pkmnTableColNames: Array<string>;
  colSortIcons: Array<string>;
  sortBy: string;
  ascending: boolean;
  searchInput: string;

  // This is for reading PokeAPI objects from json file
  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;

  constructor(
    private updateService: UpdateService, private convertService: ConvertService,
    private loginService: LoginService, private pokemonService: PokemonService,
    private moveService: MoveService, private teamService: TeamService,
    private types: TypeService) {

    // Assign my placeholder favTeam using teamService
    // this.favTeam = this.teamService.favTeam;
    // now using loadTeam() instead

    // My default selected Pokemon's attacks
    this.selPkmnMoves = new Array<Move>();

    // by default our attacks are collapsed
    this.expandOrCollapse = false;
    this.collapse = 'arrow_drop_down';

    this.pkmnTableColNames = ['name', 'type', 'hp', 'atk', 'def', 'satk', 'sdef', 'spe'];
    this.colSortIcons = [ // The sort icon underneath each pkmnTableColNames
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert',
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
    ];
    this.sortBy = ''; // default sort by pokedex order
    this.ascending = true;
  }

  loadTeam() {
    const myTrainer = JSON.parse(localStorage.getItem('trainer')) as Trainer;
    const teams = JSON.parse(localStorage.getItem('teams')) as Team[];
    if (teams.length > 0 && myTrainer) {
      // Load team, if one exists
      if (teams[0]) {
        this.favTeam = this.convertService.teamToPokeTeam(teams[0], myTrainer.trainerId, this.pokedex, this.movedex);
      }
      // Load box, if any
      this.sets = new Array<Set>();
      for (const set of JSON.parse(localStorage.getItem('sets'))) {
        this.sets.push(set);
      }
    } else {
      // Load from local storage
      this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
    }
    // if null, get an empty team
    if (!this.favTeam) {
      this.favTeam = new Array<PokeAPI>();
      for (let i = 0; i < 6; i++) {
        this.favTeam.push(new PokeAPI());
      }
    }
  }

  // toggles the show moves/hide moves button
  toggleCollapse() {
    this.expandOrCollapse = !this.expandOrCollapse;
    this.collapse = this.expandOrCollapse ? 'arrow_drop_up' : 'arrow_drop_down';
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
    this.sortBy = this.pkmnTableColNames[i];
  }

  /**
   * Shows you detailed information about your Pokemon, specifically their attacks.
   * If a pokemon from the search box is selected, give them 4 empty attacks
   * @param pkmn The Pokemon you wish to select, whether it be from your team or a new one
   */
  selectPokemon(pkmn: PokeAPI): boolean {
    if (!pkmn) {
      return false;
    }
    this.selectedPkmn = pkmn;
    this.loadStatChart();
    this.selPkmnMoves = new Array<Move>();
    let myMove: Move;

    // Assign detailed attack info into selPkmnMoves
    for (let i = 0; i < this.selectedPkmn.attackIds.length; i++) { // attackIds are of unknown length
      // subtract 1 because our json is 1-indexed while arrays are 0-indexed
      myMove = this.movedex[this.selectedPkmn.attackIds[i] - 1];
      if (myMove) {
        this.selPkmnMoves[i] = Object.assign(myMove);
      } else {
        myMove = new Move();
        myMove.name = '';
        this.selPkmnMoves[i] = myMove;
      }
      if (this.selPkmnMoves[i].effectChance) { // if there is a secondary effect
        this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
          String(this.selPkmnMoves[i].effectChance)); // with this
      }
    }
    while (this.selPkmnMoves.length < 4) {
      this.selPkmnMoves.push(new Move());
    }
    return true;
  }

  /**
   * Selects a pokemon from our team to edit. If already selected, cancel editing
   * @param i the position of the team your pokemon is in
   * @param pkmn the pokemon itself
   */
  selectTeamPokemon(i: number, pkmn: PokeAPI) {
    if (this.selected !== i) {
      this.selected = i;
    } else {
      this.selected = -1;
    }
    this.selectPokemon(pkmn);
  }
  /**
   * If an event needs to occur when selecting a Pokemon from the Pokemon Search box, do it here
   * @param pkmn The pokemon selected
   */
  selectNewPokemon(pkmn: PokeAPI) {
    if (this.favTeam.length < 6) {
      this.selected = this.favTeam.length;
    }
    // Assigns a new instance of the Pokemon, so we don't edit the pokedex itself
    this.selectPokemon(Object.assign(pkmn));
  }

  /**
   * Triggers when the save button is pressed
   */
  savePokemon() {
    const myTrainer = JSON.parse(localStorage.getItem('trainer'));
    // wipe our selected Pokemon's old attacks so we can add the new ones back in
    this.selectedPkmn.attackIds = [null, null, null, null];
    this.selectedPkmn.moveset = [null, null, null, null];

    // If our trainer is logged in, assign trainer ID
    if (myTrainer) {
      this.selectedPkmn.trainerId = myTrainer.trainerId;
    }
    // Save our Pokemon's attacks
    for (let i = 0; i < 4; i++) {
      // if the move exists
      if (this.selPkmnMoves[i].id) {
        this.selectedPkmn.attackIds[i] = this.selPkmnMoves[i].id;
        this.selectedPkmn.moveset[i] = this.selPkmnMoves[i].name;
      } else {
        // if not, assign a placeholder
        const m = new Move();
        m.name = '';
        this.selPkmnMoves[i] = m;
      }
    }
    // Add the Pokemon to our team if they picked a slot to save to
    if (this.selected >= 0) {
      this.favTeam[this.selected] = this.selectedPkmn;
    }
    // Save sets to localstorage
    const mySet = this.convertService.pokeapiToSet(this.selectedPkmn);
    this.sets.push(mySet);
    this.loginService.changeSets(this.sets);

    // Put our favTeam in local storage so even an unregistered user can use our service
    localStorage.setItem('favTeam', JSON.stringify(this.favTeam));

    // Send http request to save set and team if the user is logged in
    if (myTrainer) {
      this.updateService.saveSet(mySet);
      const myTeam = this.convertService.pokeTeamToSetTeam(this.favTeam, this.myTeam.teamName, this.myTeam.teamId);
      this.updateService.saveTeam(myTeam);
    }
  }

  /**
   * Deprecated
   * Reads json file created by pokeAPI and populates our pokedex with 151 Pokemon
   */
  getPokeAPIjson() {
    this.pokemonService.getJson().subscribe(data => {
      this.pokedex = data as Array<PokeAPI>;
    }, error => {
      console.error(error);
    });
  }

  /**
   * Deprecated
   * Reads json file created by pokeAPI, and edited by Howard by hand <--wtf
   * because the data was for gen7 and we needed gen1, then fills our movedex with 164 Moves
   */
  getMoveAPIjson() {
    this.moveService.getJson().subscribe(data => {
      this.movedex = data as Array<Move>;
      // I think this throws "Cannot read property 'sprite' of undefined" because things havent loaded yet
      this.selectPokemon(this.favTeam[0]);
      this.loadStatChart();
    }, error => {
      console.error(error);
    });
  }

  /**
   * Given an attack name, put the full move details into selPkmnMoves
   * @param i the index of selPkmnMove to change
   * @param attackName the attack name
   */
  setSelPkmnMoves(i: number, attackName: string) {
    let myMove: Move;
    console.log('inside setSelPkmnMoves() ' + i + ' ' + attackName);
    if (attackName === '') {
      myMove = new Move();
      myMove.name = '';
      this.selPkmnMoves[i] = myMove;
    } else {
      for (const move of this.movedex) {
        if (move.name === attackName) {
          this.selPkmnMoves[i] = Object.assign(move);
          if (this.selPkmnMoves[i].effectChance) { // if there is a secondary effect
            this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
              String(this.selPkmnMoves[i].effectChance)); // with this
          }
          break;
        }
      }
    }
  }

  startAnimationForBarChart(chart) {
    let seq2: number, delays2: number, durations2: number;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };

  loadStatChart(): boolean {
    if (!this.selectedPkmn) {
      return false;
    }
    /* Pokemon Stat Chart initialization  */
    const dataPokemonStatChart = {
      labels: [
        this.selectedPkmn.stats.hp + '\nHP',
        this.selectedPkmn.stats.atk + '\nAtk',
        this.selectedPkmn.stats.def + '\nDef',
        this.selectedPkmn.stats.satk + '\nSatk',
        this.selectedPkmn.stats.sdef + '\nSdef',
        this.selectedPkmn.stats.spe + '\nSpe'
      ],
      series: [[
        this.selectedPkmn.stats.hp,
        this.selectedPkmn.stats.atk,
        this.selectedPkmn.stats.def,
        this.selectedPkmn.stats.satk,
        this.selectedPkmn.stats.sdef,
        this.selectedPkmn.stats.spe
      ]]
    };
    const optionsPokemonStatChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 200,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    const pokemonStatChart = new Chartist.Bar(
      '#pokemonStatChart',
      dataPokemonStatChart,
      optionsPokemonStatChart,
      responsiveOptions
    );

    // start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(pokemonStatChart);
    return true;
  }

  ngOnInit() {
    // Load 151 Pokemon into pokedex and 164 moves into movedex
    // this.getPokeAPIjson();
    // this.getMoveAPIjson();
    // Using a forkJoin to guarantee both dex being loaded before execution
    Observable.forkJoin(
      this.pokemonService.getJson(),
      this.moveService.getJson()
    ).subscribe(
      ([pokeAPIArray, moveArray]) => {
        this.pokedex = pokeAPIArray;
        this.movedex = moveArray;
        // calling these functions here because this is the only location where
        // we can guarantee our pokedex and movedex have been fully loaded

        // Assign my favTeam using localStorage or from session if one exists
        this.loadTeam();
        this.selectPokemon(this.favTeam[0]);
        this.loadStatChart();
      }
    );
  }

}
