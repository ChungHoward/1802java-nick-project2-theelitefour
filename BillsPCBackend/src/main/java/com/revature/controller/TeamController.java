package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import com.revature.domain.Team;
import com.revature.domain.Trainer;
import com.revature.service.TeamService;

@RestController
@Scope(value=WebApplicationContext.SCOPE_SESSION)
public class TeamController {
	@Autowired
	private TeamService service;
	
	@RequestMapping(method=RequestMethod.GET, value="/resources/team/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Team> getTeamById(@PathVariable int id) {
		Team team = service.retrieveTeamById(id);
		
		if (team != null) {
			return new ResponseEntity<Team>(team, HttpStatus.OK);
		} else {
			return new ResponseEntity<Team>(HttpStatus.NO_CONTENT);
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/resources/team", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Integer> createTeam(@RequestBody Team team) {
		int id = service.createTeam(team);
		
		return new ResponseEntity<Integer>(id, HttpStatus.CREATED);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/resources/team", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Integer> updateTeam(@RequestBody Team team) {
		service.updateTeam(team);
		
		return new ResponseEntity<Integer>(team.getTeamId(), HttpStatus.ACCEPTED);
	}
}
