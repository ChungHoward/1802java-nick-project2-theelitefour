package com.revature.service;

import com.revature.dao.TrainerDaoImp;
import com.revature.dao.RegisterDAO;

public class RegisterService
{
	private static TrainerDaoImp dao = new TrainerDaoImp();
	
    public static boolean register(String username, String password, String email)
    {
    	if(dao.retrieveTrainerByName(username)==null) {
    		RegisterDAO.register(username, password, email);
    		return true;
    	}
    	
        
        return false;
    }
}
