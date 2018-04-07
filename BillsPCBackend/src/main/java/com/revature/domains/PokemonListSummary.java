package com.revature.domains;

import java.util.List;

public class PokemonListSummary {
	private int id;
	private String name;
	private List<String> types;
	private String sprite;
	
	public PokemonListSummary() {
		super();
	}
	
	public PokemonListSummary(String name, List<String> types, String sprite) {
		super();
		this.name = name;
		this.types = types;
		this.sprite = sprite;
	}
	
	public PokemonListSummary(int id, String name, List<String> types, String sprite) {
		super();
		this.id = id;
		this.name = name;
		this.types = types;
		this.sprite = sprite;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getTypes() {
		return types;
	}

	public void setTypes(List<String> types) {
		this.types = types;
	}

	public String getSprite() {
		return sprite;
	}

	public void setSprite(String sprite) {
		this.sprite = sprite;
	}
}
