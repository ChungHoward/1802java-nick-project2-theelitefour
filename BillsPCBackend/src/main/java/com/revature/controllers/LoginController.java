package com.revature.controllers;

import com.revature.services.LoginService;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController
{
    @RequestMapping(method = RequestMethod.POST, value = "resources/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> login(@RequestParam String username, String password)
    {
        System.out.println("hello called from LoginController " + username + " " + password);

        boolean toRet = LoginService.login(username, password);
        
        return new ResponseEntity<Boolean>(toRet, HttpStatus.OK);
    }
}
