package co.pokeapi.domain.move;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.revature.domain.MyMove;

import co.pokeapi.domain.commonmodel.NamedApiResource;
import co.pokeapi.domain.commonmodel.VerboseEffect;

/**
 * Represents the JSON for Move from PokeApi.
 * The JSON is laid out as follows:
 * {
 * 		"id": Integer,
 * 		"name": String,
 * 		"Accuracy": Integer,
 * 		"effect_chance": Integer,
 * 		"pp": Integer,
 * 		"power": Integer,
 * 		"contest_combos": ContestComboSets,
 * 		"constest_type": NamedApiResource,
 * 		"contest_effect": ApiResource,
 * 		"damage_class": NamedApiResource,
 * 		"effect_entries": List<VerboseEffect>,
 * 		"effect_changes": List<AbilityEffectChange>,
 * 		"flavor_text_entries": List<MoveFlavorText>,
 * 		"generation": NamedApiResource,
 * 		"machines": List<MachineVersionDetail>,
 * 		"meta": MoveMetaData,
 * 		"names": List<Name>,
 * 		"past_values": List<PastMoveStatValues>,
 * 		"stat_changes": List<MoveStatChange>,
 * 		"super_contest_effect", ApiResource,
 * 		"target", NamedApiResource,
 * 		"type", NamedApiResource
 * }
 *
 */
public class Move {
	private Integer id;
	private String name;
	private List<Name> names;
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
	
	public List<Name> getNames() {
		return names;
	}

	public void setNames(List<Name> names) {
		this.names = names;
	}

	@Override
	public String toString() {
		return "Move [id=" + id + ", name=" + name + ", accuracy=" + accuracy + ", effectChance=" + effectChance
				+ ", pp=" + pp + ", power=" + power + ", damageClass=" + damageClass + ", effectEntries="
				+ effectEntries + ", generation=" + generation + ", type="
				+ type + "]";
	}
	
	private String getLocalizedName(String language) {
		for (Name name : names) {
			if (language.equals(name.getLanguage().getName()))
				return name.getName();
		}
		return null;
	}
	
	public MyMove toMyMove() {
		MyMove myMove = new MyMove();
		
		myMove.setId(id);
		myMove.setName(getLocalizedName("en"));
		myMove.setApiName(name);
		myMove.setAccuracy(accuracy);
		myMove.setDamageClass(damageClass.getName());
		myMove.setEffect(effectEntries.get(0).getShortEffect());
		myMove.setEffectChance(effectChance);
		myMove.setPp(pp);
		myMove.setPower(power);
		myMove.setType(type.getName());
		
		return myMove;
	}
	
	
}
