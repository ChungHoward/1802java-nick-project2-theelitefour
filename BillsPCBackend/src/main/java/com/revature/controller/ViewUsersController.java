package com.revature.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import com.revature.components.UserComponentGenerator;
import com.revature.domain.Trainer;
import com.revature.service.ViewUsersService;

//use session scope to check what type of user is calling this method
@RestController
@Scope(value=WebApplicationContext.SCOPE_SESSION)
public class ViewUsersController {
	
	@Autowired
	UserComponentGenerator userSession;
	
	
	@Autowired
	private ViewUsersService viewUsers;
	
	@RequestMapping(method= RequestMethod.GET, value = "resources/view-user", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Trainer>> viewUsers(){
		System.out.println("In viewUsers method, user is: "+userSession.getUser());
		List<Trainer> toRet = null;
		if(userSession.getUser()==null || userSession.getUser().getRole()==null || !userSession.getUser().getRole().equals("3")) {
			return new ResponseEntity<List<Trainer>>(HttpStatus.UNAUTHORIZED);
		}
		else{
			toRet = viewUsers.getTrainers();
			System.out.println(toRet);
			return new ResponseEntity<List<Trainer>>(toRet, HttpStatus.OK);
		}
	}
	
}
