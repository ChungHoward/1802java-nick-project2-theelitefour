package com.revature.daos;

import java.util.List;

import com.revature.domains.Trainer;

public interface TrainerDao {
	
	public Trainer retrieveTrainerById(int i);
	
	public List<Trainer> retreiveAllTrainers();
	
	public int createTrainer(Trainer tr);
	
	public void updateTrainer(Trainer tr);
	
	public void deleteTrainer(Trainer tr);
}
