package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.domain.Team;
import com.revature.service.TeamService;

@RestController
public class FeaturedController {

	@Autowired
	private TeamService service;
	
	@RequestMapping(method=RequestMethod.GET, value="resources/featured", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Team>> getFeaturedTeams() {
		List<Team> featuredTeams = service.retrieveFeaturedTeams();
		
		if (featuredTeams.isEmpty()) {
			return new ResponseEntity<List<Team>>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<Team>>(featuredTeams, HttpStatus.OK);
		}
	}
}
