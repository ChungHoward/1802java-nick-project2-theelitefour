package com.revature.driver;



import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

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
		
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		
		Trainer tr = ac.getBean("trainer", Trainer.class);
		tr.setName("Brock8");
		tr.setPassword("password");
		
		PokemonSet ps1 = ac.getBean("pokemonSet", PokemonSet.class);
		
		ps1.setTrainer(tr);
		
		
		Team team = ac.getBean("team", Team.class);
		System.out.println(team);
		team.setSet1(ps1);
		
		
		System.out.println(team);
		
		Session sess = HibernateUtil.getSession();
		Transaction t = sess.beginTransaction();
		
		int trainerId = (int) sess.save(tr);
		int setId;
		setId= (int) sess.save(ps1);
		
		int teamId = (int) sess.save(team);
		System.out.println("Trainer Id :"+trainerId);
		System.out.println("Set Id:"+setId);
		System.out.println("Team Id:"+teamId);
		t.commit();
		sess.close();
		System.out.println(team);
	}

}
