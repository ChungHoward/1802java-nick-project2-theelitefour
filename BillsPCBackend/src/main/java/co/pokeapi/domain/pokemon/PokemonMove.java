package co.pokeapi.domain.pokemon;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.fasterxml.jackson.annotation.JsonProperty;

import co.pokeapi.domain.commonmodel.NamedApiResource;

/**
 * Represents the JSON for PokemonMove from PokeApi.
 * The JSON is laid out as following:
 * {
 * 		"move": NamedApiResource,
 * 		"version_group_details": PokemonMoveVersion
 * }
 *
 */
public class PokemonMove {
	public NamedApiResource move;
	private List<PokemonMoveVersion> moveVersion;
	private Pattern pattern = Pattern.compile(".*move\\/(\\d+)\\/");
	
	public NamedApiResource getMove() {
		return move;
	}

	public void setMove(NamedApiResource move) {
		this.move = move;
	}

	public List<PokemonMoveVersion> getMoveVersion() {
		return moveVersion;
	}

	@JsonProperty("version_group_details")
	public void setMoveVersion(List<PokemonMoveVersion> moveVersion) {
		this.moveVersion = moveVersion;
	}

	@Override
	public String toString() {
		return "Move [move=" + move + "]";
	}
	
	public boolean isLearnableByGeneration() {
//		Gen 1 introduced only 165 moves
		int moveLimit = 164;
		Matcher m = pattern.matcher(move.getUrl());
		m.matches();
		
		return Integer.parseInt(m.group(1)) < moveLimit;
	}
}
