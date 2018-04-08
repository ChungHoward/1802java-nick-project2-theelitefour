package com.revature.services;

import com.revature.daos.LoginDao;

public class LoginService
{
    public static boolean login(String username, String password)
    {
        return LoginDao.login(username, password);
    }
}
