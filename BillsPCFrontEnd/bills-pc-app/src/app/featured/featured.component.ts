import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';
import { FeatureService } from '../services/feature.service';
import { Move } from '../move';
import { Team } from '../team';
import { Set } from '../set';
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
  pokeTeam: Array<PokeAPI>;
  pokeTeamArray: Array<Array<PokeAPI>>;

  pokedex: Array<PokeAPI>;
  movedex: Array<Move>;

  constructor(private featureService: FeatureService, private convertService: ConvertService,
    private pokemonService: PokemonService, private moveService: MoveService, private types: TypeService) {
      this.featTeamArray = [];
      this.pokeTeamArray = [];
    }

  selectTeamPokemon(i: number, pkmn: PokeAPI) {
    // TODO: Save this pokemon to your box
  }

  ngOnInit() {
    this.featTeamArray = new Array<Team>();
    this.pokeTeamArray = new Array<Array<PokeAPI>>();
    // Make http request
    Observable.forkJoin(
      this.pokemonService.getJson(),
      this.moveService.getJson(),
      this.featureService.getFeaturedTeams()
    ).subscribe(
      ([pokeAPIArray, moveArray, featTeamArray]) => {
        this.pokedex = pokeAPIArray;
        this.movedex = moveArray;
        this.featTeamArray = featTeamArray;
        // THIS IS THE ONLY LOCATION WHERE WE CAN GUARANTEE POKEDEX AND MOVEDEX EXIST
        // if the Array is not empty, we should turn the sets inside into pokemon

        for(let i = 0; i < this.featTeamArray.length; i ++)
        {
          console.log("-set " + i + " trainer = " + (this.featTeamArray[i].trainer.toString));
        }

        if (this.featTeamArray.length > 0) {
          for (let i = 0; i < this.featTeamArray.length; i++) {
            this.pokeTeam = new Array<PokeAPI>();
            this.pokeTeam = this.convertService.teamToPokeTeam(featTeamArray[i], 0, this.pokedex, this.movedex);
            this.pokeTeamArray.push(this.pokeTeam);

            console.log("--- log test ---");
            console.log("name " + this.pokeTeamArray[0][i].name);
            
          }
        }
      }, error => {
        console.error(error);
      }
    );
  }

}