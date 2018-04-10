package com.revature.dao;

import java.util.List;

import com.revature.domain.PokemonSet;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Component;

import com.revature.domain.Team;
import com.revature.domain.Trainer;
import com.revature.util.HibernateUtil;

@Component
public class TeamDaoImp implements TeamDao {

	@Override
	public Team retrieveTeamById(int i) {
		Session sess = HibernateUtil.getSession();
		Team team = (Team) sess.get(Team.class, i);
		sess.close();
		
		return team;
	}

	@Override
	public List<Team> retreiveAllTeamsByTrainer(Trainer user) {
		Session sess = HibernateUtil.getSession();
		String hql = "FROM Team WHERE set1 in (Select setId from PokemonSet where trainer ="+user.getTrainerId()+")";
		//String hql = "FROM Team WHERE TR_ID = " + user.getTrainerId();

		Query query = sess.createQuery(hql);
		return query.list();

	}

	@Override
	public int createTeam(Team team) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		int i = (int) sess.save(team);
		t.commit();
		sess.close();
		
		return i;
	}

	@Override
	public void updateTeam(Team team) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		sess.update(team);
		t.commit();
		sess.close();
	}

	@Override
	public void deleteTeam(Team team) {
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		Team toDel =(Team) sess.load(Team.class, team.getTeamId());
		if(toDel!=null) {
			sess.delete(toDel);
		}
		t.commit();
		
		sess.close();
		
	}

}
