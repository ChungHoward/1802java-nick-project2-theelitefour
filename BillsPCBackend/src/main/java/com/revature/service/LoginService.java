package com.revature.service;

import org.springframework.stereotype.Service;
import com.revature.dao.LoginDao;
import com.revature.domain.Trainer;

@Service
public class LoginService
{	
    public Trainer login(String username, String password)
    {
    	return LoginDao.login(username, password);
    }
}
