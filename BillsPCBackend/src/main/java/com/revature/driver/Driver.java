package com.revature.driver;



import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.Subqueries;

import com.revature.daos.PokemonSetDaoImp;
import com.revature.daos.TeamDao;
import com.revature.daos.TeamDaoImp;
import com.revature.daos.TrainerDao;
import com.revature.daos.TrainerDaoImp;
import com.revature.domains.PokemonSet;
import com.revature.domains.Team;
import com.revature.domains.Trainer;
import com.revature.util.HibernateUtil;




public class Driver {

	public static void main(String[] args) {
/*		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		
		Trainer tr = new Trainer(0,"test","password","default");
		
		int id = (int) sess.save(tr);
		
		System.out.println("After persisting object");
		
		System.out.println("Id: "+ id);
		
		t.commit();
		
		tr = (Trainer) sess.get(Trainer.class,200);
		
		System.out.println("first trainer: "+tr.getName());*/
		
		//ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		PokemonSetDaoImp dao = new PokemonSetDaoImp();
		TrainerDao trDao = new TrainerDaoImp();
		TeamDao teamDao = new TeamDaoImp();
		Trainer brock = trDao.retrieveTrainerByName("Misty");
		System.out.println(brock);

	
		
	
		//set.setTrainer(brock);
		//dao.createSet(set);
		
		//System.out.println(brock);
		//System.out.println(set);
		//trDao.deleteTrainer(brock);
		List<Team> list = teamDao.retreiveAllTeamsByTrainer(brock);
		for(Team t: list) {
			System.out.println(t);
		}
		System.out.println("finished");
//		PokemonSet ps1 = ac.getBean("pokemonSet", PokemonSet.class);
//		
//		ps1.setTrainer(tr);
//		
//		
//		Team team = ac.getBean("team", Team.class);
//		System.out.println(team);
//		team.setSet1(ps1);
//		
//		
//		System.out.println(team);
//		
//		Session sess = HibernateUtil.getSession();
//		Transaction t = sess.beginTransaction();
//		
//		int trainerId = (int) sess.save(tr);
//		int setId;
//		setId= (int) sess.save(ps1);
//		
//		int teamId = (int) sess.save(team);
//		System.out.println("Trainer Id :"+trainerId);
//		System.out.println("Set Id:"+setId);
//		System.out.println("Team Id:"+teamId);
//		t.commit();
//		sess.close();
//		System.out.println(team);
	}

}
