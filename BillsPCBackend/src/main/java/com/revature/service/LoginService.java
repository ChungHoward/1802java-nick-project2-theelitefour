package com.revature.service;

import com.revature.dao.LoginDao;

public class LoginService
{
    public static void login(String username, String password)
    {
        LoginDao.login(username, password);
    }
}
