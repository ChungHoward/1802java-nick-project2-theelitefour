package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.TeamDao;
import com.revature.domain.Team;
import com.revature.domain.Trainer;

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
