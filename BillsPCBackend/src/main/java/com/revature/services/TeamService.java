package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.daos.TeamDao;
import com.revature.domains.Team;
import com.revature.domains.Trainer;

@Service
public class TeamService {
	@Autowired
	private TeamDao dao;
	
	public Team retrieveTeamById(int id) {
		return dao.retrieveTeamById(id);
	}
	
	public List<Team> retrieveAllTeamsByTrainer(Trainer trainer) {
		return dao.retreiveAllTeamsByTrainer(trainer);
	}
}
