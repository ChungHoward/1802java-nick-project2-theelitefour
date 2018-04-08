package com.revature.daos;

import java.util.List;

import com.revature.domains.Trainer;

public interface TrainerDao {
	
	public Trainer retrieveTrainerById(int i);
	
	public Trainer retrieveTrainerByName(String name);
	
	public List<Trainer> retreiveAllTrainers();
	
	public int createTrainer(Trainer tr);
	
	public void updateTrainer(Trainer tr);
	
	public void deleteTrainer(Trainer tr);
}
