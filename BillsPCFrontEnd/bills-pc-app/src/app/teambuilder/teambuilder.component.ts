import { Component, OnInit } from '@angular/core';
import { Filter } from 'app/pipe/filter.pipe';
import { Pokemon } from 'app/pokemon';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.css']
})
export class TeambuilderComponent implements OnInit {

  /* These variables are for the team display at the top of the page */
  favTeam: Array<Pokemon>;
  pkmn1: Pokemon;
  pkmn2: Pokemon;
  pkmn3: Pokemon;
  pkmn4: Pokemon;
  pkmn5: Pokemon;
  pkmn6: Pokemon;

  sprite1: string;
  sprite2: string;
  sprite3: string;
  sprite4: string;
  sprite5: string;
  sprite6: string;

  attack1: Array<string>;
  attack2: Array<string>;
  attack3: Array<string>;
  attack4: Array<string>;
  attack5: Array<string>;
  attack6: Array<string>;

  none: string;
  normal: string;
  grass: string;
  fire: string;
  water: string;
  electric: string;
  ice: string;
  bug: string;
  poison: string;
  ground: string;
  rock: string;
  fight: string;
  flying: string;
  psychic: string;
  ghost: string;
  dragon: string;

  expandOrCollapse: boolean;

  /* These variables are for the Detailed Pokemon View/Search */
  questionSprite: string;
  myStyle: any;
  searchInput: string;

  constructor() {
    /* Initialize all the types, perhaps consider exporting them */
    this.none = 'assets/img/types/none.png';
    this.normal = 'assets/img/types/normal.png';
    this.grass = 'assets/img/types/grass.png';
    this.fire = 'assets/img/types/fire.png';
    this.water = 'assets/img/types/water.png';
    this.electric = 'assets/img/types/electric.png';
    this.ice = 'assets/img/types/ice.png';
    this.bug = 'assets/img/types/bug.png';
    this.poison = 'assets/img/types/poison.png';
    this.ground = 'assets/img/types/ground.png';
    this.rock = 'assets/img/types/rock.png';
    this.fight = 'assets/img/types/fight.png';
    this.flying = 'assets/img/types/flying.png';
    this.psychic = 'assets/img/types/psychic.png';
    this.ghost = 'assets/img/types/ghost.png';
    this.dragon = 'assets/img/types/dragon.png';

    /* Display your team on page load */
    this.pkmn1 = new Pokemon();
    this.pkmn2 = new Pokemon();
    this.pkmn3 = new Pokemon();
    this.pkmn4 = new Pokemon();
    this.pkmn5 = new Pokemon();
    this.pkmn6 = new Pokemon();
    this.pkmn1.name = 'Jolteon';
    this.pkmn1.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';
    this.pkmn1.types = [this.electric, this.none];
    this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
    this.pkmn2.name = 'Exeggutor';
    this.pkmn2.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
    this.pkmn2.types = [this.grass, this.psychic];
    this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
    this.pkmn3.name = 'Moltres';
    this.pkmn3.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
    this.pkmn3.types = [this.fire, this.flying];
    this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
    this.pkmn4.name = 'Slowbro';
    this.pkmn4.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
    this.pkmn4.types = [this.water, this.psychic];
    this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
    this.pkmn5.name = 'Chansey';
    this.pkmn5.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
    this.pkmn5.types = [this.normal, this.none];
    this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'];
    this.pkmn6.name = 'Gengar';
    this.pkmn6.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
    this.pkmn6.types = [this.ghost, this.poison];
    this.pkmn6.moveset = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];
    this.favTeam = new Array<Pokemon>();
    this.favTeam.push(this.pkmn1);
    this.favTeam.push(this.pkmn2);
    this.favTeam.push(this.pkmn3);
    this.favTeam.push(this.pkmn4);
    this.favTeam.push(this.pkmn5);
    this.favTeam.push(this.pkmn6);

    // by default our attacks are collapsed
    this.expandOrCollapse = false;

    // this will be used as a placeholder image before searching for a pokemon
    this.questionSprite = 'assets/img/question.png';
  }

  toggleCollapse() {
    this.expandOrCollapse = !this.expandOrCollapse;
  }

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

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
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);


    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);


    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    const dataEmailsSubscriptionChart = {
      labels: ['HP', 'Atk', 'Def', 'Satk', 'Sdef', 'Spe'],
      series: [
        [250, 5, 5, 105, 105, 50]
      ]
    };
    const optionsEmailsSubscriptionChart = {
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
    const emailsSubscriptionChart = new Chartist.Bar(
      '#emailsSubscriptionChart',
      dataEmailsSubscriptionChart,
      optionsEmailsSubscriptionChart,
      responsiveOptions
    );

    // start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(emailsSubscriptionChart);
  }

}
