package com.revature.services;

import com.revature.DAOs.RegisterDAO;

public class RegisterService
{
    public static void register(String username, String password, String email)
    {
        RegisterDAO.register(username, password, email);
    }
}
