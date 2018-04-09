package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import com.revature.domains.Team;
import com.revature.domains.Trainer;
import com.revature.services.TeamService;

@RestController
@Scope(value=WebApplicationContext.SCOPE_SESSION)
public class TeamController {
	@Autowired
	private Trainer trainer;
	
	@Autowired
	private TeamService service;
	
	@RequestMapping(method=RequestMethod.GET, value="/resources/team/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Team> getTeamById(@PathVariable int id) {
		if (trainer == null) {
			return new ResponseEntity<Team>(HttpStatus.UNAUTHORIZED);
		}
		
		Team team = service.retrieveTeamById(id);
		
		if (team != null) {
			return new ResponseEntity<Team>(team, HttpStatus.OK);
		} else {
			return new ResponseEntity<Team>(HttpStatus.NO_CONTENT);
		}
	}
	
//	@RequestMapping(method=RequestMethod.GET, value="/resources/team", produces=MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<List<Team>> getAllTeamsByTrainer() {
//		
//	}
}
