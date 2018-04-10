package com.revature.dao;

import com.revature.domain.Trainer;
import com.revature.util.HibernateUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;

public class RegisterDAO
{
    public static void register(String username, String password, String email)
    {
        Session session = HibernateUtil.getSession();

        Trainer newTrainer = new Trainer();

        newTrainer.setName(username);
        newTrainer.setPassword(password);

        try
        {
            session.beginTransaction();
            session.save(newTrainer);
            session.getTransaction().commit();
        }
        catch (HibernateException e)
        {
            e.printStackTrace();
            session.getTransaction().rollback();
        }
        session.close();
    }
}
