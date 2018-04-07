package co.pokeapi.domain.pokemon;

import co.pokeapi.domain.commonmodel.NamedApiResource;

public class PokemonType {
	public Integer slot;
	public NamedApiResource type;

	public Integer getSlot() {
		return slot;
	}

	public void setSlot(Integer slot) {
		this.slot = slot;
	}

	public NamedApiResource getType() {
		return type;
	}

	public void setType(NamedApiResource type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Type [slot=" + slot + ", type=" + type + "]";
	}
}
