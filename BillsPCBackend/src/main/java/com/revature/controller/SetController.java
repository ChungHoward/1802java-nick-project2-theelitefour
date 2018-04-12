package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.domain.PokemonSet;
import com.revature.service.SetService;

@RestController
public class SetController {
	
	@Autowired
	private SetService service;
	
	@RequestMapping(method=RequestMethod.PUT, value="resources/set", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> updateSet(@RequestBody PokemonSet set) { 
		this.service.updateSet(set);
		
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="resources/set", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Integer> createSet(@RequestBody PokemonSet set) {
		PokemonSet result = this.service.createSet(set);
		
		if (result == null) {
			return new ResponseEntity<Integer>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Integer>(result.getSetId(), HttpStatus.CREATED);
		}
	}
}
