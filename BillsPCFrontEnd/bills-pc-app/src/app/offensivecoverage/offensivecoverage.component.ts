import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'app/services/pokemon.service';
import { Pokemon, PokeAPI, Stat } from 'app/pokemon';

@Component({
  selector: 'app-offensivecoverage',
  templateUrl: './offensivecoverage.component.html',
  styleUrls: ['./offensivecoverage.component.css'],
  providers: [PokemonService]
})
export class OffensiveCoverageComponent implements OnInit {

    // This is for reading PokeAPI objects from json file
    pokedex: Array<PokeAPI>;
    uniqueTypes: Array<PokeAPI>;
    pokeAPITmp: PokeAPI;
    tempStr: string;
    match: number;

  constructor(private pokemonService: PokemonService)
  {
    this.pokedex = new Array<PokeAPI>();
    this.uniqueTypes = new Array<PokeAPI>();

    this.match = 1;
  }

  populateSet()
  {
    this.uniqueTypes.push(this.pokedex[0]);

    for(let i = 0; i < this.pokedex.length; i++)
    { 
      for(let y = 0; y < this.uniqueTypes.length; y++)
      {        
        if(this.pokedex[i].types[0] == this.uniqueTypes[y].types[0] && this.pokedex[i].types[1] == this.uniqueTypes[y].types[1])
        {
          this.match = 0;
          break;
        }
      }
      if(this.match == 1)
      {  
        this.uniqueTypes.push(this.pokedex[i]);
      }
      this.match = 1;
    }
  }

  getPokeAPIjson() {
    this.pokemonService.getJson().subscribe(data => {
      this.pokedex = data as Array<PokeAPI>;

      this.populateSet();

    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
        // Load 151 Pokemon into this.pokedex
        this.getPokeAPIjson();
   }
}
