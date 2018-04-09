package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.components.UserComponent;
import com.revature.daos.LoginDao;
import com.revature.daos.TrainerDaoImp;

@Service
public class LoginService
{
	@Autowired
	private UserComponent user;
	
    public boolean login(String username, String password)
    {
    	TrainerDaoImp dao = new TrainerDaoImp();
    	boolean toRet = LoginDao.login(username, password);
    	if(toRet) {
    		user.setUser(dao.retrieveTrainerByName(username));
    	}
        return toRet;
    }
    
    public UserComponent getUser() {
    	return user;
    }
}
