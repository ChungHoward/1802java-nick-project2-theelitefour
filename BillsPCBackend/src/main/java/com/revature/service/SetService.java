package com.revature.service;

import org.springframework.stereotype.Service;

import com.revature.dao.PokemonSetDao;
import com.revature.dao.PokemonSetDaoImp;
import com.revature.domain.PokemonSet;

@Service
public class SetService {
	private PokemonSetDao dao = new PokemonSetDaoImp();
	
	public void updateSet(PokemonSet set) {
		this.dao.updateSet(set);
	}
	
	public int createSet(PokemonSet set) {
		return this.dao.createSet(set);
	}
}
