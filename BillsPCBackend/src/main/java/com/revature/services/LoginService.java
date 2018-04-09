package com.revature.services;

import org.springframework.stereotype.Service;

import com.revature.daos.LoginDao;
import com.revature.domains.Trainer;

@Service
public class LoginService
{	
    public Trainer login(String username, String password)
    {
//    	TrainerDaoImp dao = new TrainerDaoImp();
    	return LoginDao.login(username, password);
    }
    
//    public UserComponent getUser() {
//    	return user;
//    }
}
