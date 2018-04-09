package com.revature.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.domains.MyPokemon;
import com.revature.service.PokeApiPokemonService;

import co.pokeapi.domain.pokemon.Pokemon;

@RestController
public class PokemonController {
	PokeApiPokemonService service = new PokeApiPokemonService();
	
	@RequestMapping(method=RequestMethod.GET, value="/pokemon", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<MyPokemon>> getAllPokemon() {
		return new ResponseEntity<List<MyPokemon>>(service.getAllPokemon().parallelStream().map(Pokemon::toMyPokemon).collect(Collectors.toList()), HttpStatus.OK);
	}
}
