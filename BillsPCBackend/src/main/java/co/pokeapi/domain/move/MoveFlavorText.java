package co.pokeapi.domain.move;

import com.fasterxml.jackson.annotation.JsonProperty;

import co.pokeapi.domain.commonmodel.NamedApiResource;

public class MoveFlavorText {
	private String flavorText;
	private NamedApiResource language;
	private NamedApiResource versionGroup;
	
	public String getFlavorText() {
		return flavorText;
	}
	
	@JsonProperty("flavor_text")
	public void setFlavorText(String flavorText) {
		this.flavorText = flavorText;
	}
	
	public NamedApiResource getLanguage() {
		return language;
	}
	
	public void setLanguage(NamedApiResource language) {
		this.language = language;
	}
	
	public NamedApiResource getVersionGroup() {
		return versionGroup;
	}
	
	@JsonProperty("version_group")
	public void setVersionGroup(NamedApiResource versionGroup) {
		this.versionGroup = versionGroup;
	}
	
	@Override
	public String toString() {
		return "MoveFlavorText [flavorText=" + flavorText + ", language=" + language + ", versionGroup=" + versionGroup
				+ "]";
	}
}
