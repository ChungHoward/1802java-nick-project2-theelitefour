import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.css']
})
export class TeambuilderComponent implements OnInit {

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

  electric: string;
  grass: string;
  psychic: string;
  fire: string;
  flying: string;
  water: string;
  normal: string;
  ghost: string;
  poison: string;

  constructor() {
    this.sprite1 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';
    this.sprite2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
    this.sprite3 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
    this.sprite4 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
    this.sprite5 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
    this.sprite6 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';

    this.attack1 = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
    this.attack2 = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
    this.attack3 = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
    this.attack4 = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
    this.attack5 = ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'];
    this.attack6 = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];

    this.electric = '../assets/img/types/electric.png';
    this.grass = '../assets/img/types/grass.png';
    this.psychic = '../assets/img/types/psychic.png';
    this.fire = '../assets/img/types/fire.png';
    this.flying = '../assets/img/types/flying.png';
    this.water = '../assets/img/types/water.png';
    this.normal = '../assets/img/types/normal.png';
    this.ghost = '../assets/img/types/ghost.png';
    this.poison = '../assets/img/types/poison.png';
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
        [99, 87, 61, 121, 121, 103]
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
