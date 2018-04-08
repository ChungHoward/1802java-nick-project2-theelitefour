package com.revature.services;

import com.revature.daos.LoginDAO;

public class LoginService
{
    public static void login(String username, String password)
    {
        LoginDAO.login(username, password);
    }
}
