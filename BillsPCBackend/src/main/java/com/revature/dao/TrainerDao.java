package com.revature.dao;

import java.util.List;

import com.revature.domain.Trainer;

public interface TrainerDao {
	
	public Trainer retrieveTrainerById(int i);
	
	public Trainer retrieveTrainerByName(String name);
	
	public List<Trainer> retreiveAllTrainers();
	
	public int createTrainer(Trainer tr);
	
	public void updateTrainer(Trainer tr);
	
	public void deleteTrainer(Trainer tr);
}
