package com.revature.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.dao.TrainerDaoImp;
import com.revature.domain.Trainer;

@Service
public class ViewUsersService {

	public List<Trainer> getTrainers(){
		TrainerDaoImp dao = new TrainerDaoImp();
		return dao.retreiveAllTrainers();
	}
	
	public void updateTrainer(String username) {
		TrainerDaoImp dao = new TrainerDaoImp();
		Trainer toUpdate = dao.retrieveTrainerByName(username);
		toUpdate.setRole("2");
		dao.updateTrainer(toUpdate);
	}
}
