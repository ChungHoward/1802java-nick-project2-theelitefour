package com.revature.daos;

import java.util.List;

import com.revature.domains.Team;
import com.revature.domains.Trainer;

public interface TeamDao {

	public Team retrieveTeamById(int i);
	
	public List<Team> retreiveAllTeamsByTrainer(Trainer user);
	
	public int createTeam(Team team);
	
	public void updateTeam(Team team);
	
	public void deleteTeam(Team team);
	
}
