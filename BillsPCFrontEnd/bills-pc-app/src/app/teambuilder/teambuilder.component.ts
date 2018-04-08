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
  providers: [PokemonService, TeamService, TypeService]
})
export class TeambuilderComponent implements OnInit {
  /* These variables are for the Team View at the top of the page, and some other stuff */
  // The 6 pokemon on my team
  favTeam: Array<Pokemon>;
  // This service generates 6 sample pokemon for me
  teamService: TeamService;
  // Contains the image for every type and damage class
  types: TypeService;
  // The current state of whether viewing your team's attacks are being shown or hidden
  expandOrCollapse: boolean;
  // The name of the icon that shows or hides your attacks
  collapse: string;

  /* These variables are for the selected Pokemon thing */
  // This is the Pokemon we are viewing in full detail
  selectedPkmn: Pokemon;
  selPkmnMoves: Array<Move>;
  moveService: MoveService;

  /* These variables are for the Detailed Pokemon View/Search */
  questionSprite: string; // image for when no pokemon is selected. no, it's not missingno
  pkmnTableColNames: Array<string>;
  colSortIcons: Array<string>;
  sortBy: string;
  ascending: boolean;
  searchInput: string;

  // This is for reading PokeAPI objects from json file
  pokedex: Array<PokeAPI>;

  constructor(private pokemonService: PokemonService) {
    // Assigns the value of types to their respective image
    this.types = new TypeService();

    // Assign my favTeam using teamService
    this.teamService = new TeamService();
    this.favTeam = this.teamService.favTeam;

    // My default selected Pokemon
    this.selectedPkmn = this.favTeam[0];

    // by default our attacks are collapsed
    this.expandOrCollapse = false;
    this.collapse = 'arrow_drop_down';

    // this can be used as a placeholder image before searching for a pokemon
    this.questionSprite = 'assets/img/question.png';

    this.pkmnTableColNames = ['name', 'type', 'hp', 'atk', 'def', 'satk', 'sdef', 'spe'];
    this.colSortIcons = [ // The icon underneath each pkmnTableColNames
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert',
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
    ];
    this.sortBy = 'name';
    this.ascending = true;

    //
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

  selectPokemon(pkmn: Pokemon) {
    this.selectedPkmn = pkmn;
    this.ngOnInit();
    // The below for loop doesnt work
    // for (let i = 0; i < pkmn.moveset.length; i++) {
    //   this.moveService.getMove(pkmn.moveset[i]).subscribe(data => this.selPkmnMoves[i] = data);
    //   console.log(this.selPkmnMoves[i]);
    // }
  }

  getPokeAPIjson() {
    this.pokemonService.getJson().subscribe(data => {
      this.pokedex = data as Array<PokeAPI>;
    }, error => console.error(error));
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

  ngOnInit() {
    // Load 151 Pokemon into this.pokedex
    this.getPokeAPIjson();

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

}
