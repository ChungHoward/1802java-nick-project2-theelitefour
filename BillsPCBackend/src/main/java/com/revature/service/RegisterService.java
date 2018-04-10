package com.revature.service;

import com.revature.dao.RegisterDAO;

public class RegisterService
{
    public static void register(String username, String password, String email)
    {
        RegisterDAO.register(username, password, email);
    }
}
