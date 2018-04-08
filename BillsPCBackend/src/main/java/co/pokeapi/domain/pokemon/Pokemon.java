package co.pokeapi.domain.pokemon;

import java.util.List;

/**
 * Represents the JSON for Pokemon from PokeApi.
 * The JSON is laid out as follows:
 * {
 * 		"id": Integer,
 * 		"name": String,
 * 		"base_experience": Integer,
 * 		"height": Integer,
 * 		"is_default": Boolean,
 * 		"order": Integer,
 * 		"weight": Integer,
 * 		"abilities": List<PokemonAbility>,
 * 		"forms": List<NamedApiResource>,
 * 		"game_indices": List<VersionGameIndex>,
 * 		"held_items": PokemonHeldItem,
 * 		"location_area_encounters": String,
 * 		"moves": List<PokemonMove>,
 * 		"sprites": PokemonSprites,
 * 		"species": NamedApiResource,
 * 		"stats": List<PokemonStat>,
 * 		"types": List<PokemonType>
 * }
 *
 */
public class Pokemon {
	
	private Integer id;
	private String name;
	private List<PokemonMove> moves;
	private List<PokemonStat> stats;
	private List<PokemonType> types;
	private PokemonSprites sprites;

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

	public List<PokemonMove> getMoves() {
		return moves;
	}

	public void setMoves(List<PokemonMove> moves) {
		this.moves = moves;
	}

	public List<PokemonStat> getStats() {
		return stats;
	}

	public void setStats(List<PokemonStat> stats) {
		this.stats = stats;
	}

	public List<PokemonType> getTypes() {
		return types;
	}

	public void setTypes(List<PokemonType> types) {
		this.types = types;
	}

	public PokemonSprites getSprites() {
		return sprites;
	}

	public void setSprites(PokemonSprites sprites) {
		this.sprites = sprites;
	}

	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", name=" + name + ", moves=" + moves + ", stats=" + stats + ", types=" + types
				+ "]";
	}
}
