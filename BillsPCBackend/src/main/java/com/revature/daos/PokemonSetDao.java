package com.revature.daos;

import java.util.List;

import com.revature.domains.PokemonSet;
import com.revature.domains.Trainer;

public interface PokemonSetDao {
	
	public PokemonSet retrieveSetById(int i);
	
	public List<PokemonSet> retreiveAllSets();
	
	public List<PokemonSet> retreiveAllSetsByTrainer(Trainer user);
	
	public int createSet(PokemonSet set);
	
	public void updateSet(PokemonSet set);
	
	public void deleteSet(PokemonSet set);
}
