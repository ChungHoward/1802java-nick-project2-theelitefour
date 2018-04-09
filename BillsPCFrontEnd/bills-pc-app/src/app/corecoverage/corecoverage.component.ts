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
  selector: 'app-corecoverage',
  templateUrl: './corecoverage.component.html',
  styleUrls: ['./corecoverage.component.css'],
  providers: [MoveService, PokemonService, TeamService, TypeService]
})
export class CoreCoverageComponent implements OnInit {
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
    this.expandOrCollapse = true;
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

   }

     // toggles the show moves/hide moves button
  toggleCollapse() {
    this.expandOrCollapse = !this.expandOrCollapse;
    this.collapse = this.expandOrCollapse ? 'arrow_drop_up' : 'arrow_drop_down';
  }

  ngOnInit() {

  }

}
