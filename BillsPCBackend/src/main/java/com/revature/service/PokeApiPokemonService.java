package com.revature.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import co.pokeapi.domain.pokemon.Pokemon;

public class PokeApiPokemonService {
	
	public Pokemon getPokemonById(int id) {
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        
		ResponseEntity<Pokemon> response = restTemplate.exchange("https://pokeapi.co/api/v2/pokemon/" + id, HttpMethod.GET, entity, Pokemon.class);
		
		return response.getBody();
	}
	
	public List<Pokemon> getAllPokemon() {
		return IntStream.rangeClosed(1, 151)
				.parallel()
				.mapToObj(this::getPokemonById)
				.collect(Collectors.toList());
	}
}
