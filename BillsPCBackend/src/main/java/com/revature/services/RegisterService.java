package com.revature.services;

import com.revature.daos.RegisterDAO;
import com.revature.daos.TrainerDaoImp;

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
