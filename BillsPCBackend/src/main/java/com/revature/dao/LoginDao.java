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

        String hql = ("FROM Trainer");
        Query query = session.createQuery(hql);
        List<Trainer> results = query.list();

        for (Trainer trainer : results) {
        	if (username.equals(trainer.getName()) && password.equals(trainer.getPassword())) {
        		session.close();
        		return trainer;
        	}
        }
        session.close();
        return null;
    }
}
