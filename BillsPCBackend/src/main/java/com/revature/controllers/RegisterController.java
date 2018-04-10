package com.revature.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.service.RegisterService;

@RestController
public class RegisterController
{
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public void hello(@RequestParam String username, String password, String email)
    {
        RegisterService.register(username, password, email);

        System.out.println("hello called from RegisterController " + username + " " + password + " " + email);
        return;
    }
}
