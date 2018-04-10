package com.revature.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.domain.PokemonSet;
import com.revature.domain.Trainer;
import com.revature.util.HibernateUtil;


public class TrainerDaoImp implements TrainerDao {

	@Override
	public Trainer retrieveTrainerById(int i) {
		Session sess = HibernateUtil.getSession();
		Trainer tr = (Trainer) sess.get(Trainer.class, i);
		sess.close();
		
		return tr;
	}

	@Override
	public List<Trainer> retreiveAllTrainers() {
		Session sess = HibernateUtil.getSession();
		Criteria cr = sess.createCriteria(Trainer.class);
		List<Trainer> results = cr.list();
		
		sess.close();
		
		return results;
	}

	@Override
	public int createTrainer(Trainer tr) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		int i = (int) sess.save(tr);
		t.commit();
		sess.close();
		
		return i;
	}

	@Override
	public void updateTrainer(Trainer tr) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		sess.update(tr);
		t.commit();
		sess.close();
	}

	@Override
	public void deleteTrainer(Trainer tr) {
//		Session sess = HibernateUtil.getSession();
//		Transaction t = sess.beginTransaction();
//		Trainer toDel =(Trainer) sess.load(Trainer.class, tr.getTrainerId());
//		if(toDel!=null) {
//			sess.delete(toDel);
//		}
//		t.commit();
//		
//		sess.close();
	}

}
