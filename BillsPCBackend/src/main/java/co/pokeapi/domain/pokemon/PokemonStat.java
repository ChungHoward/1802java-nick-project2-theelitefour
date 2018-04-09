package co.pokeapi.domain.pokemon;

import com.fasterxml.jackson.annotation.JsonProperty;

import co.pokeapi.domain.commonmodel.NamedApiResource;

public class PokemonStat {
	private Integer baseStat;
	private Integer effort;
	private NamedApiResource stat;
	public Integer getBaseStat() {
		return baseStat;
	}
	
	@JsonProperty("base_stat")
	public void setBaseStat(Integer baseStat) {
		this.baseStat = baseStat;
	}
	public Integer getEffort() {
		return effort;
	}
	public void setEffort(Integer effort) {
		this.effort = effort;
	}
	public NamedApiResource getStat() {
		return stat;
	}
	public void setStat(NamedApiResource stat) {
		this.stat = stat;
	}
	@Override
	public String toString() {
		return "Stat [baseState=" + baseStat + ", effort=" + effort + ", stat=" + stat + "]";
	}
}
