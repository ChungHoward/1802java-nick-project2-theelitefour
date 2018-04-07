package co.pokeapi.domain.move;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import co.pokeapi.domain.commonmodel.NamedApiResource;
import co.pokeapi.domain.commonmodel.VerboseEffect;

public class Move {
	private Integer id;
	private String name;
	private Integer accuracy;
	private Integer effectChance;
	private Integer pp;
	private Integer power;
	private NamedApiResource damageClass;
	private List<VerboseEffect> effectEntries;
	private NamedApiResource generation;
	private NamedApiResource type;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getAccuracy() {
		return accuracy;
	}
	
	public void setAccuracy(Integer accuracy) {
		this.accuracy = accuracy;
	}
	
	public Integer getEffectChance() {
		return effectChance;
	}
	
	@JsonProperty("effect_chance")
	public void setEffectChance(Integer effectChance) {
		this.effectChance = effectChance;
	}
	
	public Integer getPp() {
		return pp;
	}
	
	public void setPp(Integer pp) {
		this.pp = pp;
	}
	
	public Integer getPower() {
		return power;
	}
	
	public void setPower(Integer power) {
		this.power = power;
	}
	
	public NamedApiResource getDamageClass() {
		return damageClass;
	}
	
	@JsonProperty("damage_class")
	public void setDamageClass(NamedApiResource damageClass) {
		this.damageClass = damageClass;
	}
	
	public List<VerboseEffect> getEffectEntries() {
		return effectEntries;
	}
	
	@JsonProperty("effect_entries")
	public void setEffectEntries(List<VerboseEffect> effectEntries) {
		this.effectEntries = effectEntries;
	}
	
	public NamedApiResource getGeneration() {
		return generation;
	}
	
	public void setGeneration(NamedApiResource generation) {
		this.generation = generation;
	}
	
	public NamedApiResource getType() {
		return type;
	}
	
	public void setType(NamedApiResource type) {
		this.type = type;
	}
	
	@Override
	public String toString() {
		return "Move [id=" + id + ", name=" + name + ", accuracy=" + accuracy + ", effectChance=" + effectChance
				+ ", pp=" + pp + ", power=" + power + ", damageClass=" + damageClass + ", effectEntries="
				+ effectEntries + ", generation=" + generation + ", type="
				+ type + "]";
	}
	
	
}
