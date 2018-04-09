package com.revature.service;

import com.revature.dao.LoginDAO;

public class LoginService
{
    public static void login(String username, String password)
    {
        LoginDAO.login(username, password);
    }
}
