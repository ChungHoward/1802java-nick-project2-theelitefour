package com.revature.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.revature.domain.PokemonSet;
import com.revature.domain.Trainer;
import com.revature.util.HibernateUtil;

public class PokemonSetDaoImp implements PokemonSetDao {

	@Override
	public PokemonSet retrieveSetById(int i) {
		Session sess = HibernateUtil.getSession();
		PokemonSet ps = (PokemonSet) sess.get(PokemonSet.class, i);
		sess.close();
		
		return ps;
	}

	@Override
	public List<PokemonSet> retreiveAllSets() {
		Session sess = HibernateUtil.getSession();
		Criteria cr = sess.createCriteria(PokemonSet.class);
		List<PokemonSet> results = cr.list();
		
		sess.close();
		return results;
	}
	
	@Override
	public List<PokemonSet> retreiveAllSetsByTrainer(Trainer user) {
		Session sess = HibernateUtil.getSession();
		Criteria cr = sess.createCriteria(PokemonSet.class);
		cr.add(Restrictions.eq("trainer", user));
		List<PokemonSet> results = cr.list();
		
		sess.close();
		return results;
	}


	@Override
	public int createSet(PokemonSet set) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		Trainer trainer = (Trainer) sess.get(Trainer.class, set.getTrainer().getTrainerId());
		set.setTrainer(trainer);
		int i = (int) sess.save(set);
		t.commit();
		sess.close();
		
		return i;
	}

	@Override
	public void updateSet(PokemonSet set) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		Trainer trainer = (Trainer) sess.get(Trainer.class, set.getTrainer().getTrainerId());
		set.setTrainer(trainer);
		sess.update(set);
		t.commit();
		sess.close();

	}

	@Override
	public void deleteSet(PokemonSet set) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		PokemonSet toDel =(PokemonSet) sess.load(PokemonSet.class, set.getSetId());
		if(toDel!=null) {
			sess.delete(toDel);
		}
		t.commit();
		
		sess.close();
	}


}
