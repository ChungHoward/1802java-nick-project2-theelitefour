import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { PokeAPI } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

  id: string;
  myPokemon: PokeAPI;

  constructor(private pokeService: PokemonService) { }

  getPokemon() {
    this.pokeService.getPokemon(String(this.id)).subscribe(data => this.myPokemon = data);
  }

  ngOnInit() { }

}
