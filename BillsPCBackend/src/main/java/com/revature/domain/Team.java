package com.revature.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


@Entity
@Table(name="TEAM")
public class Team {

	@Id
	@Column(name="TEAM_ID")
	@SequenceGenerator(name="teamSeq" , sequenceName="TEAM_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="teamSeq")
	private int teamId;
	
	@Column(name="TEAM_NAME")
	private String teamName;
	
	
	@OneToOne(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="SET1")
	private PokemonSet set1;
	

	@OneToOne(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="SET2")
	private PokemonSet set2;
	

	@OneToOne(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="SET3")
	private PokemonSet set3;
	
	
	@OneToOne(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="SET4")
	private PokemonSet set4;
	

	@OneToOne(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="SET5")
	private PokemonSet set5;
	
	
	@OneToOne(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="SET6")
	private PokemonSet set6;

	public Team() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Team(int teamId, String teamName, PokemonSet set1, PokemonSet set2, PokemonSet set3, PokemonSet set4,
			PokemonSet set5, PokemonSet set6) {
		super();
		this.teamId = teamId;
		this.teamName = teamName;
		this.set1 = set1;
		this.set2 = set2;
		this.set3 = set3;
		this.set4 = set4;
		this.set5 = set5;
		this.set6 = set6;
	}

	public int getTeamId() {
		return teamId;
	}

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public PokemonSet getSet1() {
		return set1;
	}

	public void setSet1(PokemonSet set1) {
		this.set1 = set1;
	}

	public PokemonSet getSet2() {
		return set2;
	}
	
	public void setSet2(PokemonSet set2) {
		this.set2 = set2;
	}

	public PokemonSet getSet3() {
		return set3;
	}
	
	public void setSet3(PokemonSet set3) {
		this.set3 = set3;
	}

	public PokemonSet getSet4() {
		return set4;
	}
	
	public void setSet4(PokemonSet set4) {
		this.set4 = set4;
	}

	public PokemonSet getSet5() {
		return set5;
	}

	public void setSet5(PokemonSet set5) {
		this.set5 = set5;
	}

	public PokemonSet getSet6() {
		return set6;
	}
	
	public void setSet6(PokemonSet set6) {
		this.set6 = set6;
	}

	@Override
	public String toString() {
		return "Team [teamId=" + teamId + ", teamName=" + teamName + ", set1=" + set1 + ", set2=" + set2 + ", set3="
				+ set3 + ", set4=" + set4 + ", set5=" + set5 + ", set6=" + set6 + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((set1 == null) ? 0 : set1.hashCode());
		result = prime * result + ((set2 == null) ? 0 : set2.hashCode());
		result = prime * result + ((set3 == null) ? 0 : set3.hashCode());
		result = prime * result + ((set4 == null) ? 0 : set4.hashCode());
		result = prime * result + ((set5 == null) ? 0 : set5.hashCode());
		result = prime * result + ((set6 == null) ? 0 : set6.hashCode());
		result = prime * result + teamId;
		result = prime * result + ((teamName == null) ? 0 : teamName.hashCode());
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
		Team other = (Team) obj;
		if (set1 == null) {
			if (other.set1 != null)
				return false;
		} else if (!set1.equals(other.set1))
			return false;
		if (set2 == null) {
			if (other.set2 != null)
				return false;
		} else if (!set2.equals(other.set2))
			return false;
		if (set3 == null) {
			if (other.set3 != null)
				return false;
		} else if (!set3.equals(other.set3))
			return false;
		if (set4 == null) {
			if (other.set4 != null)
				return false;
		} else if (!set4.equals(other.set4))
			return false;
		if (set5 == null) {
			if (other.set5 != null)
				return false;
		} else if (!set5.equals(other.set5))
			return false;
		if (set6 == null) {
			if (other.set6 != null)
				return false;
		} else if (!set6.equals(other.set6))
			return false;
		if (teamId != other.teamId)
			return false;
		if (teamName == null) {
			if (other.teamName != null)
				return false;
		} else if (!teamName.equals(other.teamName))
			return false;
		return true;
	}
	
	
	
}
