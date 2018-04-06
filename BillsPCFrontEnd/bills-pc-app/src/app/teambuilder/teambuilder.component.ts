import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Pokemon } from 'app/pokemon';
import { Filter } from 'app/pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';
import { Types } from 'app/services/type.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.css']
})
export class TeambuilderComponent implements OnInit {

  favTeam: Array<Pokemon>;
  pkmn1: Pokemon;
  pkmn2: Pokemon;
  pkmn3: Pokemon;
  pkmn4: Pokemon;
  pkmn5: Pokemon;
  pkmn6: Pokemon;
  selectedPkmn: Pokemon;

  types: Types;

  expandOrCollapse: boolean;
  collapse: string;

  /* These variables are for the Detailed Pokemon View/Search */
  questionSprite: string; // image for when no pokemon is selected
  pkmnTableColNames: Array<string>;
  colSortIcons: Array<string>;
  sortBy: string;
  ascending: boolean;
  searchInput: string;

  constructor() {
    // Assigns the value of types to their respective image
    this.types = new Types();

    /* Making my team */
    this.pkmn1 = new Pokemon();
    this.pkmn2 = new Pokemon();
    this.pkmn3 = new Pokemon();
    this.pkmn4 = new Pokemon();
    this.pkmn5 = new Pokemon();
    this.pkmn6 = new Pokemon();

    this.pkmn1.name = 'Jolteon';
    this.pkmn1.types = [this.types.electric, this.types.none];
    this.pkmn1.stats = [65, 65, 60, 110, 110, 130];
    this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
    this.pkmn1.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';

    this.pkmn2.name = 'Exeggutor';
    this.pkmn2.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
    this.pkmn2.types = [this.types.grass, this.types.psychic];
    this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
    this.pkmn2.stats = [95, 95, 85, 125, 125, 55];

    this.pkmn3.name = 'Moltres';
    this.pkmn3.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
    this.pkmn3.types = [this.types.fire, this.types.flying];
    this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
    this.pkmn3.stats = [90, 100, 90, 125, 125, 90];

    this.pkmn4.name = 'Slowbro';
    this.pkmn4.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
    this.pkmn4.types = [this.types.water, this.types.psychic];
    this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
    this.pkmn4.stats = [65, 75, 110, 80, 80, 30];

    this.pkmn5.name = 'Chansey';
    this.pkmn5.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
    this.pkmn5.types = [this.types.normal, this.types.none];
    this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'];
    this.pkmn5.stats = [250, 5, 5, 105, 105, 50];

    this.pkmn6.name = 'Gengar';
    this.pkmn6.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
    this.pkmn6.types = [this.types.ghost, this.types.poison];
    this.pkmn6.moveset = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];
    this.pkmn6.stats = [60, 65, 60, 130, 130, 110];

    this.favTeam = new Array<Pokemon>();
    this.favTeam.push(this.pkmn1);
    this.favTeam.push(this.pkmn2);
    this.favTeam.push(this.pkmn3);
    this.favTeam.push(this.pkmn4);
    this.favTeam.push(this.pkmn5);
    this.favTeam.push(this.pkmn6);

    this.selectedPkmn = this.pkmn1;

    // by default our attacks are collapsed
    this.expandOrCollapse = false;
    this.collapse = 'arrow_drop_down';

    // this can be used as a placeholder image before searching for a pokemon
    this.questionSprite = 'assets/img/question.png';

    this.pkmnTableColNames = ['name', 'type', 'hp', 'atk', 'def', 'satk', 'sdef', 'spe'];
    this.colSortIcons = [
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert',
      'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
    ];
    this.sortBy = 'name';
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

  selectPokemon(pkmn: Pokemon) {
    this.selectedPkmn = pkmn;
    this.ngOnInit();
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
    /* Pokemon Stat Chart initialization - rename Emails to Pokemon */
    const dataPokemonStatChart = {
      labels: ['HP', 'Atk', 'Def', 'Satk', 'Sdef', 'Spe'],
      series: [ this.selectedPkmn.stats ]
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
