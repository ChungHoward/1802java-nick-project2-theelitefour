package co.pokeapi.domain.commonmodel;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the JSON object VerboseEffect from PokeApi.
 * The JSON object is laid out as follows:
 * {
 * 		"effect": String,
 * 		"short_effect": String,
 * 		"language": NamedApiResource
 * }
 *
 */
public class VerboseEffect {
	private String effect;
	private String shortEffect;
	private NamedApiResource language;
	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}
	public String getShortEffect() {
		return shortEffect;
	}
	@JsonProperty("short_effect")
	public void setShortEffect(String shortEffect) {
		this.shortEffect = shortEffect;
	}
	public NamedApiResource getLanguage() {
		return language;
	}
	public void setLanguage(NamedApiResource language) {
		this.language = language;
	}
	@Override
	public String toString() {
		return "VerboseEffect [effect=" + effect + ", shortEffect=" + shortEffect + ", language=" + language + "]";
	}
}
