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
		List<Pokemon> pokemons = service.getAllPokemon();
		
		List<MyPokemon> myPokemon = new ArrayList<>();
		
		for (Pokemon pokemon: pokemons) {
			MyPokemon my = new MyPokemon();
			
			my.setId(pokemon.getId());
			my.setName(pokemon.getName());
			my.setSprite(pokemon.getSprites().getFrontDefault());
			my.setMoves(pokemon.getMoves().stream().map(PokemonMove::getMove).filter(move -> introducedBeforeGeneration(move.getUrl())).collect(Collectors.toList()));
			
			Map<String, Integer> myStats = new HashMap<>();
			for (PokemonStat stat : pokemon.getStats()) {
				myStats.put(stat.getStat().getName(), stat.getBaseStat());
			}
			
			List<String> myTypes = new ArrayList<>();
			for (PokemonType type: pokemon.getTypes()) {
				myTypes.add(type.getType().getName());
			}
			
			myPokemon.add(my);
		}
		
		return new ResponseEntity<List<MyPokemon>>(myPokemon, HttpStatus.OK);
	}
	
	private boolean introducedBeforeGeneration(String url) {
//		Gen 1 introduced only 165 moves
		int moveLimit = 165;
		
		System.out.println(url);
		Pattern pattern = Pattern.compile(".*move\\/(\\d+)\\/");
		Matcher m = pattern.matcher(url);
		
		
		return Integer.parseInt(m.group(1)) < moveLimit;
	}
}
