package com.revature.dao;

import com.revature.domain.Trainer;
import com.revature.util.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LoginDao
{
    public static Trainer login(String username, String password)
    {
        Session session = HibernateUtil.getSession();

        String hql = ("FROM Trainer");// Where TRAINER_NAME = " + username);
        Query query = session.createQuery(hql);
        List<Trainer> results = query.list();

        for (Trainer trainer : results) {
        	if (username.equals(trainer.getName()) && password.equals(trainer.getPassword())) {
                //System.out.println("login valid");
        		return trainer;
        	}
        }

        //System.out.println("login invalid");
        return null;
    }
}
