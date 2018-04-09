package com.revature.domains;

public class MyMove {
	private Integer id;
	private String name;
	private String apiName;
	private Integer accuracy;
	private String effect;
	private Integer effectChance;
	private Integer pp;
	private Integer power;
	private String damageClass;
	private String type;
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
	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}
	public Integer getEffectChance() {
		return effectChance;
	}
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
	public String getDamageClass() {
		return damageClass;
	}
	public void setDamageClass(String damageClass) {
		this.damageClass = damageClass;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getApiName() {
		return apiName;
	}
	public void setApiName(String apiName) {
		this.apiName = apiName;
	}
	@Override
	public String toString() {
		return "MyMove [id=" + id + ", name=" + name + ", accuracy=" + accuracy + ", effect=" + effect
				+ ", effectChance=" + effectChance + ", pp=" + pp + ", power=" + power + ", damageClass=" + damageClass
				+ ", type=" + type + "]";
	}

}
