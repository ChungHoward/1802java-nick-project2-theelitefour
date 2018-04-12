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
	
	@Autowired
	private SetService setService;
	
	public Team retrieveTeamById(int id) {
		return dao.retrieveTeamById(id);
	}
	
	public List<Team> retrieveAllTeamsByTrainer(Trainer trainer) {
		return dao.retreiveAllTeamsByTrainer(trainer);
	}
	
	public List<Team> retrieveFeaturedTeams() {
		return dao.retrieveFeaturedTeams();
	}
	
	public int createTeam(Team team) {
		if (team.getSet1() != null) {
			team.setSet1(setService.createSet(team.getSet1()));
		}
		if (team.getSet2() != null) {
			team.setSet2(setService.createSet(team.getSet2()));
		}
		if (team.getSet3() != null) {
			team.setSet3(setService.createSet(team.getSet3()));
		}
		if (team.getSet4() != null) {
			team.setSet4(setService.createSet(team.getSet4()));
		}
		if (team.getSet5() != null) {
			team.setSet5(setService.createSet(team.getSet5()));
		}
		if (team.getSet6() != null) {
			team.setSet6(setService.createSet(team.getSet6()));
		}
		
		return dao.createTeam(team);
	}
	
	public void updateTeam(Team team) {
		if (team.getSet1() != null) {
			if (team.getSet1().getSetId() == -1)
				team.setSet1(setService.createSet(team.getSet1()));
			else
				setService.updateSet(team.getSet1());
		}
		if (team.getSet2() != null) {
			if (team.getSet2().getSetId() == -1)
				team.setSet2(setService.createSet(team.getSet2()));
			else
				setService.updateSet(team.getSet2());
		}
		if (team.getSet3() != null) {
			if (team.getSet3().getSetId() == -1)
				team.setSet3(setService.createSet(team.getSet3()));
			else
				setService.updateSet(team.getSet3());
		}
		if (team.getSet4() != null) {
			if (team.getSet4().getSetId() == -1)
				team.setSet4(setService.createSet(team.getSet4()));
			else
				setService.updateSet(team.getSet4());
		}
		if (team.getSet5() != null) {
			if (team.getSet5().getSetId() == -1)
				team.setSet5(setService.createSet(team.getSet5()));
			else
				setService.updateSet(team.getSet5());
		}
		if (team.getSet6() != null) {
			if (team.getSet6().getSetId() == -1)
				team.setSet6(setService.createSet(team.getSet6()));
			else
				setService.updateSet(team.getSet1());
		}
		dao.updateTeam(team);
	}
}
