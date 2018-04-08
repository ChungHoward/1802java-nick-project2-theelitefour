package com.revature.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import co.pokeapi.domain.move.Move;
import co.pokeapi.domain.pokemon.PokemonMove;

@Component
public class PokeApiMoveService {
	
	public Move getMoveById(int id) {
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        
		ResponseEntity<Move> response = restTemplate.exchange("https://pokeapi.co/api/v2/move/" + id, HttpMethod.GET, entity, Move.class);
		
		return response.getBody();
	}
	
	public List<Move> getAllLearnableMoves(List<PokemonMove> learnableMoves) {
		return null;
	}
}
