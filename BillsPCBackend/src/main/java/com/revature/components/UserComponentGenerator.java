package com.revature.components;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import com.revature.domain.Trainer;

@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserComponentGenerator {
	
	private Trainer user;

	public UserComponentGenerator() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserComponentGenerator(Trainer user) {
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
