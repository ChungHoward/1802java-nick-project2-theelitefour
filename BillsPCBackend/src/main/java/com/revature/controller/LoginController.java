package com.revature.controller;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import com.revature.components.UserComponentGenerator;
import com.revature.domain.Trainer;
import com.revature.service.LoginService;

@RestController
@Scope(value=WebApplicationContext.SCOPE_SESSION)
public class LoginController
{
	@Autowired
	UserComponentGenerator sessionUser;
	
	@Autowired
	private LoginService service;
	
    @RequestMapping(method = RequestMethod.POST, value = "resources/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Trainer> login(@RequestParam String username, String password)
    {
        System.out.println("hello called from LoginController " + username + " " + password);

        Trainer trainer = service.login(username, password);
        
        if (trainer != null) {
        	trainer.setPassword("");
        	sessionUser.setUser(trainer);
        	System.out.println("sessionUser set: "+sessionUser.getUser());
        	return new ResponseEntity<Trainer>(trainer, HttpStatus.OK);
        } else {
        	return new ResponseEntity<Trainer>(HttpStatus.UNAUTHORIZED);
        }
        
    }
}
