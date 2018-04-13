package com.revature.domain;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import co.pokeapi.domain.commonmodel.NamedApiResource;

@Component
public class MyPokemon {
	private Integer id;
	private Integer trainerId;
	private List<Integer> attackIds;
	private String name;
	private String sprite;
	private List<NamedApiResource> moves;
	private Map<String, Integer> stats;
	List<String> types;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Integer getTrainerId() {
		return trainerId;
	}

	public List<Integer> getAttackIds() {
		return attackIds;
	}

	public void setAttackIds(List<Integer> attackIds) {
		this.attackIds = attackIds;
	}

	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getSprite() {
		return sprite;
	}
	
	public void setSprite(String sprite) {
		this.sprite = sprite;
	}
	
	public List<NamedApiResource> getMoves() {
		return moves;
	}
	
	public void setMoves(List<NamedApiResource> moves) {
		this.moves = moves;
	}
	
	public Map<String, Integer> getStats() {
		return stats;
	}
	
	public void setStats(Map<String, Integer> stats) {
		this.stats = stats;
	}
	
	public List<String> getTypes() {
		return types;
	}
	
	public void setTypes(List<String> types) {
		this.types = types;
	}
	
	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", name=" + name + ", sprite=" + sprite + ", moves=" + moves + ", stats=" + stats
				+ ", types=" + types + "]";
	}
	
	
}
