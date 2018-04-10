package com.revature.components;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import com.revature.domain.PokemonSet;
import com.revature.domain.Team;
import com.revature.domain.Trainer;

@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserComponentGenerator {
	
	private Trainer user;
	
	private List<PokemonSet> sets;
	
	private List<Team> teams;

	public UserComponentGenerator() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserComponentGenerator(Trainer user) {
		super();
		this.user = user;
	}

	public Trainer getUser() {
		return user;
	}

	public void setUser(Trainer user) {
		this.user = user;
	}

	public List<PokemonSet> getSets() {
		return sets;
	}

	public void setSets(List<PokemonSet> sets) {
		this.sets = sets;
	}

	public List<Team> getTeams() {
		return teams;
	}

	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}

	@Override
	public String toString() {
		return "UserComponentGenerator [user=" + user + ", sets=" + sets + ", teams=" + teams + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((sets == null) ? 0 : sets.hashCode());
		result = prime * result + ((teams == null) ? 0 : teams.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserComponentGenerator other = (UserComponentGenerator) obj;
		if (sets == null) {
			if (other.sets != null)
				return false;
		} else if (!sets.equals(other.sets))
			return false;
		if (teams == null) {
			if (other.teams != null)
				return false;
		} else if (!teams.equals(other.teams))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
	
	
	
}
