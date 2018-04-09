package com.revature.daos;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Component;

import com.revature.domains.PokemonSet;
import com.revature.domains.Trainer;
import com.revature.util.HibernateUtil;

@Component
public class TrainerDaoImp implements TrainerDao {

	@Override
	public Trainer retrieveTrainerById(int i) {
		Session sess = HibernateUtil.getSession();
		Trainer tr = (Trainer) sess.get(Trainer.class, i);
		sess.close();
		
		return tr;
	}
	
	@Override
	public Trainer retrieveTrainerByName(String name) {
		Session sess = HibernateUtil.getSession();
		Criteria cr = sess.createCriteria(Trainer.class);
		cr.add(Restrictions.eq("name", name));
		List<Trainer> list = cr.list();
		sess.close();
		if(list.size()==0) {
			return null;
		}else {
			return list.get(0);
		}
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
