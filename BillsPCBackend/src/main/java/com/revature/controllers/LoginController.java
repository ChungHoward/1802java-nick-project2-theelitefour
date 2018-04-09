package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.daos.TrainerDaoImp;
import com.revature.services.LoginService;

@RestController
public class LoginController
{
	@Autowired
	private LoginService service;
	
    @RequestMapping(method = RequestMethod.POST, value = "resources/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> login(@RequestParam String username, String password)
    {
    	TrainerDaoImp dao = new TrainerDaoImp();
    	ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
        System.out.println("hello called from LoginController " + username + " " + password);

        boolean toRet = service.login(username, password);
        
        return new ResponseEntity<Boolean>(toRet, HttpStatus.OK);
    }
}
