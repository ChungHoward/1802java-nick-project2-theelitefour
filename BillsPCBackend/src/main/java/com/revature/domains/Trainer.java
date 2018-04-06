package com.revature.domains;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Entity
@Table(name="TRAINER")
public class Trainer {
	
	
	@Id
	@Column(name="TRAINER_ID")
	@SequenceGenerator(name="trainerSeq" , sequenceName="TRAINER_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="trainerSeq")
	private int trainerId;
	
	@Column(name="TRAINER_NAME")
	private String name;
	
	@Column(name="TRAINER_PASSWORD")
	private String password;
	
	@Column(name="TRAINER_ROLE")
	private String role;

	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Trainer(int trainerId, String name, String password, String role) {
		super();
		this.trainerId = trainerId;
		this.name = name;
		this.password = password;
		this.role = role;
	}

	public int getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(int trainerId) {
		this.trainerId = trainerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Trainer [trainerId=" + trainerId + ", name=" + name + ", password=" + password + ", role=" + role + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((role == null) ? 0 : role.hashCode());
		result = prime * result + trainerId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Trainer other = (Trainer) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (role == null) {
			if (other.role != null)
				return false;
		} else if (!role.equals(other.role))
			return false;
		if (trainerId != other.trainerId)
			return false;
		return true;
	}
	
	

}
