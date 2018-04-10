package com.revature.dao;

import java.util.List;

import com.revature.domain.Team;
import com.revature.domain.Trainer;

public interface TeamDao {

	public Team retrieveTeamById(int i);
	
	public List<Team> retreiveAllTeamsByTrainer(Trainer user);
	
	public int createTeam(Team team);
	
	public void updateTeam(Team team);
	
	public void deleteTeam(Team team);
	
}
