package com.revature.controllers;


import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogoutController {
	
	@RequestMapping(method=RequestMethod.GET, value = "/resources/logout")
	public ResponseEntity<Boolean> logout(HttpSession session) {
		session.invalidate();
		
		return new ResponseEntity<>(true, HttpStatus.OK);
	}
}
