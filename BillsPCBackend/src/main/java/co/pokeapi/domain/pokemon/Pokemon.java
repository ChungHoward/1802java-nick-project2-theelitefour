package co.pokeapi.domain.pokemon;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.revature.domains.MyPokemon;

import co.pokeapi.domain.commonmodel.NamedApiResource;

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
	
	public Map<String, Integer> getStatMap() {
		Map<String, Integer> statMap = new HashMap<>();
		
		for (PokemonStat stat : stats) {
			switch (stat.getStat().getName()) {
			case "attack":
				statMap.put("atk", stat.getBaseStat());
				break;
			case "defense":
				statMap.put("def", stat.getBaseStat());
				break;
			case "special-attack":
				statMap.put("satk", stat.getBaseStat());
				break;
			case "special-defense":
				statMap.put("sdef", stat.getBaseStat());
				break;
			case "speed":
				statMap.put("spe", stat.getBaseStat());
				break;
				default:
					statMap.put(stat.getStat().getName(), stat.getBaseStat());
					break;
			}
		}
		
		return statMap;
	}
	
	public List<String> getTypeList() {
		return types.stream()
				.map(PokemonType::getType)
				.map(NamedApiResource::getName)
				.collect(Collectors.toList());
	}
	
	public List<NamedApiResource> getLearnableMoves() {
		return moves.stream()
				.filter(PokemonMove::isLearnableByGeneration)
				.map(PokemonMove::getMove)
				.collect(Collectors.toList());
	}
	
	public MyPokemon toMyPokemon() {
		MyPokemon myPokemon = new MyPokemon();
		
		myPokemon.setId(id);
		myPokemon.setName(name);
		myPokemon.setTrainerId(0);
		myPokemon.setAttackIds(new ArrayList<Integer>());
		myPokemon.setSprite(sprites.getFrontDefault());
		myPokemon.setMoves(getLearnableMoves());
		myPokemon.setStats(getStatMap());
		myPokemon.setTypes(getTypeList());
		
		return myPokemon;
	}
}
