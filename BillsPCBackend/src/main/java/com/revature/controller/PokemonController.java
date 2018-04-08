package com.revature.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.domains.MyPokemon;
import com.revature.service.PokeApiPokemonService;

import co.pokeapi.domain.commonmodel.NamedApiResource;
import co.pokeapi.domain.pokemon.Pokemon;
import co.pokeapi.domain.pokemon.PokemonMove;
import co.pokeapi.domain.pokemon.PokemonStat;
import co.pokeapi.domain.pokemon.PokemonType;

@RestController
public class PokemonController {
	PokeApiPokemonService service = new PokeApiPokemonService();
	
	@RequestMapping(method=RequestMethod.GET, value="/pokemon", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<MyPokemon>> getAllPokemon() {
		
//		List<MyPokemon> myPokemon = new ArrayList<>();
//		
//		for (Pokemon pokemon: pokemons) {
//			MyPokemon my = new MyPokemon();
//			
//			my.setId(pokemon.getId());
//			my.setName(pokemon.getName());
//			my.setSprite(pokemon.getSprites().getFrontDefault());
//			my.setMoves(pokemon.getLearnableMoves());
//			my.setTypes(pokemon.getTypeList());
//			myPokemon.add(my);
//		}
		
		return new ResponseEntity<List<MyPokemon>>(service.getAllPokemon().parallelStream().map(Pokemon::toMyPokemon).collect(Collectors.toList()), HttpStatus.OK);
	}
}
