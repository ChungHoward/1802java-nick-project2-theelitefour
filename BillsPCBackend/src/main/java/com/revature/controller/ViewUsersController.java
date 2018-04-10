package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import com.revature.domain.Trainer;

//use session scope to check what type of user is calling this method
@RestController
@Scope(value=WebApplicationContext.SCOPE_SESSION)
public class ViewUsersController {
	
	@Autowired
	private Trainer user;
	
	@RequestMapping(method= RequestMethod.GET, value = "resources/view-user", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Trainer>> viewUsers(){
		
		return null;
	}
	
}
