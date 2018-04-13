package com.revature.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.dao.LoginDao;
import com.revature.dao.PokemonSetDaoImp;
import com.revature.dao.TeamDaoImp;
import com.revature.domain.PokemonSet;
import com.revature.domain.Team;
import com.revature.domain.Trainer;

@Service
public class LoginService
{	
	private PokemonSetDaoImp setDao = new PokemonSetDaoImp();
	
	private TeamDaoImp teamDao = new TeamDaoImp();
	
    public Trainer login(String username, String password)
    {
    	return LoginDao.login(username, password);
    }
    
    public List<PokemonSet> getSets(Trainer trainer){
    	return setDao.retreiveAllSetsByTrainer(trainer);
    }
    
    public List<Team> getTeams(Trainer trainer){
    	return teamDao.retreiveAllTeamsByTrainer(trainer);
    }
}
