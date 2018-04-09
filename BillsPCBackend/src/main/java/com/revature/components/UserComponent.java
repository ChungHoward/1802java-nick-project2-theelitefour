package com.revature.components;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.revature.domains.Trainer;

@Component
@Scope("session")
public class UserComponent {
	
	private Trainer user;

	public UserComponent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserComponent(Trainer user) {
		super();
		this.user = user;
	}

	public Trainer getUser() {
		return user;
	}

	public void setUser(Trainer user) {
		this.user = user;
	}
	
	
	
}
