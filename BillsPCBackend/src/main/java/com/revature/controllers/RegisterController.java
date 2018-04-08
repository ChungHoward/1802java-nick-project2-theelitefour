package com.revature.controllers;

import com.revature.services.RegisterService;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController
{
    @RequestMapping(method = RequestMethod.POST, value = "resources/register",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> hello(@RequestParam String username, String password, String email)
    {
    	System.out.println("hello called from RegisterController " + username + " " + password + " " + email);
        boolean toReturn = RegisterService.register(username, password, email);

        return new ResponseEntity<Boolean>(toReturn, HttpStatus.OK);
        
    }
}
