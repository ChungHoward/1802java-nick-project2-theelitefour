package com.revature.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
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
		
		Query query = sess.createQuery(hql);
		List<Team> list = query.list();
		sess.close();
		return list;

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

	@Override
	public List<Team> retrieveFeaturedTeams() {
		Session session = HibernateUtil.getSession();
		
		String hql = "from Team as team inner join team.trainer as trainer where trainer.role = '2'";
		
		Query query = session.createQuery(hql);
		List<Team> team = query.list();
		session.close();
		
		return team;
	}

}
