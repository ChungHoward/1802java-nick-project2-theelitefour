package com.revature.controllers;

import com.revature.services.LoginService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController
{
    @RequestMapping(method = RequestMethod.POST, value = "resources/login")
    public void login(@RequestParam String username, String password, String email)
    {
        System.out.println("hello called from LoginController " + username + " " + password);

        LoginService.login(username, password);

        System.out.println("hello called from LoginController " + username + " " + password);
        return;
    }
}
