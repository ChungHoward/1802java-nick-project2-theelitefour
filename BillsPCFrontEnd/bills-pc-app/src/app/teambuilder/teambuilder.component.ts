import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Filter } from 'app/pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';
import { Pokemon, PokeAPI, Stat } from 'app/pokemon';
import { Move } from '../move';
import { MoveService } from 'app/services/move.service';
import { PokemonService } from 'app/services/pokemon.service';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.css'],
  providers: [MoveService, PokemonService, TeamService, TypeService]
})
export class TeambuilderComponent implements OnInit {
  /* These variables are for the Team View at the top of the page, and some other stuff */
  // The placeholder 6 pokemon on my team
  favTeam: Array<Pokemon>;
  // The Team I am editing
  curTeam: Array<PokeAPI>;
  // This service generates 6 sample pokemon for me
  teamService: TeamService;
  // Contains the image for every type and damage class
  types: TypeService;
  // The current state of whether viewing your team's attacks are being shown or hidden
  expandOrCollapse: boolean;
  // The name of the icon that shows or hides your attacks
  collapse: string;

  /* These variables are for the selected Pokemon thing */
  selected: number;
  selectedPkmn: Pokemon;
  selPkmnMoves: Array<Move>;

  /* These variables are for the Detailed Pokemon View/Search */
  questionSprite: string; // image for when no pokemon is selected. no, it's not missingno
  pkmnTableColNames: Array<string>;
  colSortIcons: Array<string>;
  sortBy: string;
  ascending: boolean;
  searchInput: string;

  // This is for reading PokeAPI objects from json file
  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;

  constructor(private pokemonService: PokemonService, private moveService: MoveService) {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Assign my favTeam using teamService
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;

    // Make a team full of missingno
    this.curTeam = new Array<PokeAPI>();
    for (let i = 0; i < 6; i++) {
      this.curTeam.push(new PokeAPI());
    }
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

  selectTeamPokemon(i: number, pkmn: Pokemon) {
    // TODO: Actually modify our pokemon if any changes are made to it
    this.selected = i;
    this.selectPokemon(pkmn);
  }

  selectNewPokemon(pkmn: PokeAPI) {

  }

  selectPokemon(pkmn: Pokemon) {
    this.selectedPkmn = pkmn;
    this.loadStatChart();
    // Assign detailed attack info into selPkmnMoves
    if (!!this.selectedPkmn.attackIds.length) {
      for (let i = 0; i < this.selectedPkmn.attackIds.length; i++) { // attackIds are of unknown length
        // subtract 1 because our json is 1-indexed while arrays are 0-indexed
        this.selPkmnMoves[i] = this.movedex[this.selectedPkmn.attackIds[i] - 1];

        if (!!this.selPkmnMoves[i].effectChance) { // if there is a secondary effect
          this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
            String(this.selPkmnMoves[i].effectChance)); // with this
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
        this.selPkmnMoves[i] = this.movedex[164]; // 164 is my placeholder
      }
    }
  }

  /**
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
   * Reads json file created by pokeAPI, and edited by Howard by hand <--wtf
   * because the data was for gen7 and we needed gen1, then fills our movedex with 164 Moves
   */
  getMoveAPIjson() {
    this.moveService.getJson().subscribe(data => {
      this.movedex = data as Array<Move>;

      const p = new Pokemon();
      this.selectPokemon(p);
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
    alert(i + ' ' + attackName);
    for (const move of this.movedex) {
      if (move.name === attackName) {
        this.selPkmnMoves[i] = move;
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

  loadStatChart() {
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
  }

  ngOnInit() {
    // Load 151 Pokemon into this.pokedex
    this.getPokeAPIjson();
    this.getMoveAPIjson();
    this.loadStatChart();
  }

}
