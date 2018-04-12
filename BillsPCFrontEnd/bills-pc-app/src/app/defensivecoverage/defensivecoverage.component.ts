import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { Pokemon, PokeAPI } from 'app/pokemon';
import { TeamService } from 'app/services/team.service';
import { TypeService } from 'app/services/type.service';

@Component({
  selector: 'app-defensivecoverage',
  templateUrl: './defensivecoverage.component.html',
  styleUrls: ['./defensivecoverage.component.css']
})
export class DefensiveCoverageComponent implements OnInit {

  // The Pokemon we just clicked on
  selectedPkmn: PokeAPI;
  // My favorite team - there can only be one
  favTeam: Array<PokeAPI>;
  // Contains the images for every type and damage class
  types: TypeService;

  /* These variables are used for the Table */
  pokemonCol: Array<PokeAPI>;
  ascending: boolean;
  searchInput: string;
  myTable: number[][];
  rowColor: string[];

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

    this.pokemonCol = new Array<PokeAPI>();

    // Show sprite, name, and types in table header
    for (let i = 0; i < this.favTeam.length; i++) {
      this.pokemonCol[i] = this.favTeam[i];
    }
    this.rowColor = new Array<string>();
  }

  /**
   * Makes a table that shows what types each pokemon on your team
   * is weak or resistant to and by how much
   */
  createTable() {
    this.myTable = new Array<Array<number>>();
    let effective: number;
    let defType1: number;
    let defType2: number;
    const numPkmn = this.favTeam.length;
    const numTypes = this.types.chart.length;
    let row = new Array<number>();

    // for each pokemon on your team
    for (let i = 0; i < numPkmn; i++) {
      // for each attack type in the game
      for (let atkType = 0; atkType < numTypes - 1; atkType++) {
        // get the types of that pokemon
        defType1 = this.types.name.indexOf(this.favTeam[i].types[0]);
        defType2 = this.types.name.indexOf(this.favTeam[i].types[1]);
        // if type2 is not defined, set it to none
        if (defType2 < 0) {
          defType2 = 15;
        }
        // and see how effective every attack type is against your pokemon
        effective = this.types.chart[atkType][defType1];
        effective *= this.types.chart[atkType][defType2];
        // then update our table
        row.push(effective);
      }
      this.myTable.push(row);
      row = new Array<number>();
    }

    let sum: number;
    for (let y = 0; y < numTypes; y++) {
      sum = 0;
      for (let x = 0; x < numPkmn; x++) {
        if (this.myTable[x][y] === 1.0) {
          sum += 1;
        } else if (this.myTable[x][y] > 1.0) {
          sum += 2;
        } else if (this.myTable[x][y] < 1.0) {
          sum += 0;
        }
      }
      sum /= numPkmn;
      if (sum === 0) {
      } else if (sum > 1.2) {
        this.rowColor[y] = 'bg-red';
      } else if (sum > 1) {
        this.rowColor[y] = 'bg-pink';
      } else if (sum < 0.8) {
        this.rowColor[y] = 'bg-green';
      } else if (sum < 1) {
        this.rowColor[y] = 'bg-lime';
      }
    }
  }

  ngOnInit() {
    this.createTable();
  }

}
