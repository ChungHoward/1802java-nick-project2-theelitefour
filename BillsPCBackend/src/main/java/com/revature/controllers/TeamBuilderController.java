package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.components.UserComponent;
import com.revature.services.LoginService;
import com.revature.services.RegisterService;

@RestController
public class TeamBuilderController {
	
	@Autowired
	private LoginService service;
	
    @RequestMapping(method = RequestMethod.GET, value = "resources/navbar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserComponent> updateNavbar()
    {
    	System.out.println("updateNavbar called from TeamBuilderController");
        UserComponent toReturn = service.getUser();

        return new ResponseEntity<UserComponent>(toReturn, HttpStatus.OK);
        
    }
}
