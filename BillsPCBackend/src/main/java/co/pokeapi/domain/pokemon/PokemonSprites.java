package co.pokeapi.domain.pokemon;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PokemonSprites {
	private String frontDefault;

	public String getFrontDefault() {
		return frontDefault;
	}

	@JsonProperty("front_default")
	public void setFrontDefault(String frontDefault) {
		this.frontDefault = frontDefault;
	}

	@Override
	public String toString() {
		return "Sprite [frontDefault=" + frontDefault + "]";
	}
}
