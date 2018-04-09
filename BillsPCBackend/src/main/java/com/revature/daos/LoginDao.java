package com.revature.daos;

import com.revature.domains.Trainer;
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
        		return trainer;
        	}
        }
        
//        for(int i = 0; i < results.size(); i++)
//        {
//            System.out.println("result " + i + " = " + results.get(i));
//            System.out.println("Trainer name = " + results.get(i).getName());
//
//            if(results.get(i).getName().equals(username) && results.get(i).getPassword().equals(password))
//            {
//                System.out.println("login success");
//                return true;
//            }
//        }
//        System.out.println("login failure");

        return null;
    }
}
