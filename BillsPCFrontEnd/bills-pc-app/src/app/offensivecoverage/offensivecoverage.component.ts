import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'app/services/pokemon.service';
import { Pokemon, PokeAPI, Stat } from 'app/pokemon';
import * as Collections from 'typescript-collections';

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
    //uniqueTypes: Set<string[]>;
    pokeAPITmp: PokeAPI;
    tempStr: string;
    match: number;

  constructor(private pokemonService: PokemonService)
  {
    this.pokedex = new Array<PokeAPI>();
    this.uniqueTypes = new Array<PokeAPI>();
    //this.uniqueTypes = new Set<string[]>();    

    this.match = 1;
  }

  populateSet()
  {
    // console.log("1 " + this.pokedex.length);     // for some reason set does not work?
    // for(let i = 0; i < this.pokedex.length; i++)
    // {
    //     console.log("--- loop " + i);

    //     this.uniqueTypes.add(this.pokedex[i].types);
    // }
    // console.log("3 " + this.uniqueTypes.size);

    this.uniqueTypes.push(this.pokedex[0]);

    for(let i = 0; i < this.pokedex.length; i++)
    { 
      //console.log("--- outer loop " + i);

      for(let y = 0; y < this.uniqueTypes.length; y++)
      {
        //console.log("--- inner loop " + y);
        //console.log("compare " + y + " " +this.pokedex[i].types + " to " + i + " " + this.uniqueTypes[y].types);
        
        if(this.pokedex[i].types[0] == this.uniqueTypes[y].types[0] && this.pokedex[i].types[1] == this.uniqueTypes[y].types[1])
        {
          //console.log(this.pokedex[i].types + " = " + this.uniqueTypes[y].types);
          this.match = 0;
          break;
        }
      }
      if(this.match == 1)
      {  
        this.uniqueTypes.push(this.pokedex[i]);
        //console.log("**added - " + this.pokedex[i].types);
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
