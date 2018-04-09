package com.revature.domains;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;


@Entity
@Table(name="POKEMON_SET")
public class PokemonSet {
	
	@Id
	@Column(name="SET_ID")
	@SequenceGenerator(name="setSeq" , sequenceName="POKEMON_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="setSeq")
	private int setId;
	
	@Column(name="NICKNAME")
	private String nickname;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="TR_ID")
	private Trainer trainer;
	
	@Column(name="P_ID")
	private int pokemonId;
	
	@Column(name="ATK1")
	private int atk1;
	
	@Column(name="ATK2")
	private int atk2;
	
	@Column(name="ATK3")
	private int atk3;
	
	@Column(name="ATK4")
	private int atk4;



	public PokemonSet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PokemonSet(int setId, String nickname, Trainer trainer, int pokemonId, int atk1, int atk2, int atk3,
			int atk4) {
		super();
		this.setId = setId;
		this.nickname = nickname;
		this.trainer = trainer;
		this.pokemonId = pokemonId;
		this.atk1 = atk1;
		this.atk2 = atk2;
		this.atk3 = atk3;
		this.atk4 = atk4;
	}

	public int getSetId() {
		return setId;
	}

	public void setSetId(int setId) {
		this.setId = setId;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public int getPokemonId() {
		return pokemonId;
	}

	public void setPokemonId(int pokemonId) {
		this.pokemonId = pokemonId;
	}

	public int getAtk1() {
		return atk1;
	}

	public void setAtk1(int atk1) {
		this.atk1 = atk1;
	}

	public int getAtk2() {
		return atk2;
	}

	public void setAtk2(int atk2) {
		this.atk2 = atk2;
	}

	public int getAtk3() {
		return atk3;
	}

	public void setAtk3(int atk3) {
		this.atk3 = atk3;
	}

	public int getAtk4() {
		return atk4;
	}

	public void setAtk4(int atk4) {
		this.atk4 = atk4;
	}

	@Override
	public String toString() {
		return "pokemonSet [setId=" + setId + ", nickname=" + nickname + ", trainer=" + trainer + ", pokemonId="
				+ pokemonId + ", atk1=" + atk1 + ", atk2=" + atk2 + ", atk3=" + atk3 + ", atk4=" + atk4 + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + atk1;
		result = prime * result + atk2;
		result = prime * result + atk3;
		result = prime * result + atk4;
		result = prime * result + ((nickname == null) ? 0 : nickname.hashCode());
		result = prime * result + pokemonId;
		result = prime * result + setId;
		result = prime * result + ((trainer == null) ? 0 : trainer.hashCode());
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
		PokemonSet other = (PokemonSet) obj;
		if (atk1 != other.atk1)
			return false;
		if (atk2 != other.atk2)
			return false;
		if (atk3 != other.atk3)
			return false;
		if (atk4 != other.atk4)
			return false;
		if (nickname == null) {
			if (other.nickname != null)
				return false;
		} else if (!nickname.equals(other.nickname))
			return false;
		if (pokemonId != other.pokemonId)
			return false;
		if (setId != other.setId)
			return false;
		if (trainer == null) {
			if (other.trainer != null)
				return false;
		} else if (!trainer.equals(other.trainer))
			return false;
		return true;
	}
	
	
	
}
