import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';
import { FeatureService } from '../services/feature.service';
import { Team } from '../team';
import { Set } from '../set';
import { Move } from '../move';
import { PokeAPI } from '../pokemon';
import { ConvertService } from '../services/convert.service';
import { PokemonService } from '../services/pokemon.service';
import { MoveService } from '../services/move.service';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featTeamArray: Array<Team>;
  pokeTeamArray: Array<Array<PokeAPI>>;
  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;

  constructor(private featureService: FeatureService, private convertService: ConvertService,
    private pokemonService: PokemonService, private moveService: MoveService, private typeService: TypeService) {
      this.featTeamArray = [];
      this.pokeTeamArray = [];
    }

  selectTeamPokemon(pkmn: PokeAPI) {
    // TODO: Save this pokemon to your box
  }

  ngOnInit() {
    Observable.forkJoin(
      this.pokemonService.getJson(),
      this.moveService.getJson(),
      this.featureService.getFeaturedTeams()
    ).subscribe(
      ([pokeAPIArray, moveArray, featTeamArray]) => {
        this.pokedex = pokeAPIArray;
        this.movedex = moveArray;
        this.featTeamArray = featTeamArray;

        let i = 0;

        if (this.featTeamArray) {
          for (const featTeam of this.featTeamArray) {
            this.pokeTeamArray[i] = new Array<PokeAPI>();
            this.pokeTeamArray[i] = this.convertService.teamToPokeTeam(featTeam, 0, this.pokedex, this.movedex);
            i++;
          }
        }
      }
    );

  }
}