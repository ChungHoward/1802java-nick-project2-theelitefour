package com.revature.controllers;

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

import com.revature.domains.Trainer;
import com.revature.services.LoginService;

@RestController
@Scope(value=WebApplicationContext.SCOPE_SESSION)
public class LoginController
{
	@Autowired
	private Trainer trainer;
	
	@Autowired
	private LoginService service;
	
    @RequestMapping(method = RequestMethod.POST, value = "resources/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Trainer> login(@RequestParam String username, String password)
    {
//    	TrainerDaoImp dao = new TrainerDaoImp();
//    	ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
        System.out.println("hello called from LoginController " + username + " " + password);

        trainer = service.login(username, password);
        
        if (trainer != null) {
        	trainer.setPassword("");
        	return new ResponseEntity<Trainer>(trainer, HttpStatus.OK);
        } else {
        	return new ResponseEntity<Trainer>(HttpStatus.UNAUTHORIZED);
        }
        
//        return new ResponseEntity<Boolean>(toRet, HttpStatus.OK);
    }
}
