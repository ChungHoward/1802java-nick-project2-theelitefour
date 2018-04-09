package co.pokeapi.domain.move;

import co.pokeapi.domain.commonmodel.NamedApiResource;

public class Name {
	private String name;
	private NamedApiResource language;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public NamedApiResource getLanguage() {
		return language;
	}
	
	public void setLanguage(NamedApiResource language) {
		this.language = language;
	}
}
