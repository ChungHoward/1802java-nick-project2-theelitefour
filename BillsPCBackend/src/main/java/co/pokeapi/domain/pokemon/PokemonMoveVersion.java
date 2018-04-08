package co.pokeapi.domain.pokemon;

import com.fasterxml.jackson.annotation.JsonProperty;

import co.pokeapi.domain.commonmodel.NamedApiResource;

/**
 * 
 *
 */
public class PokemonMoveVersion {
	private NamedApiResource moveLearnMethod;
	private NamedApiResource versionGroup;
	private Integer levelLearnedAt;
	
	public NamedApiResource getMoveLearnMethod() {
		return moveLearnMethod;
	}
	
	@JsonProperty("move_learn_method")
	public void setMoveLearnMethod(NamedApiResource moveLearnMethod) {
		this.moveLearnMethod = moveLearnMethod;
	}
	
	public NamedApiResource getVersionGroup() {
		return versionGroup;
	}
	
	@JsonProperty("version_group")
	public void setVersionGroup(NamedApiResource versionGroup) {
		this.versionGroup = versionGroup;
	}
	
	public Integer getLevelLearnedAt() {
		return levelLearnedAt;
	}
	
	@JsonProperty("level_learned_at")
	public void setLevelLearnedAt(Integer levelLearnedAt) {
		this.levelLearnedAt = levelLearnedAt;
	}
	
	@Override
	public String toString() {
		return "PokemonMoveVersion [moveLearnMethod=" + moveLearnMethod + ", versionGroup=" + versionGroup
				+ ", levelLearnedAt=" + levelLearnedAt + "]";
	}
}
