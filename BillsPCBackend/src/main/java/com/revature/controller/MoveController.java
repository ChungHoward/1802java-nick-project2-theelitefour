package com.revature.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.domains.MyMove;
import com.revature.service.PokeApiMoveService;

import co.pokeapi.domain.move.Move;

@RestController
public class MoveController {
	PokeApiMoveService service = new PokeApiMoveService();
	
	@RequestMapping(method=RequestMethod.GET, value="/move", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<MyMove>> getAllMoves() {
		
		return new ResponseEntity<List<MyMove>>(service.getAllMoves().parallelStream().map(Move::toMyMove).collect(Collectors.toList()), HttpStatus.OK);
	}
}
