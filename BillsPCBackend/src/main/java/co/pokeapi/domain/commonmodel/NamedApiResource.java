package co.pokeapi.domain.commonmodel;

/**
 * Represents the JSON object "NamedApiResource" from PokeApi.
 * The JSON Object is laid out as follows:
 * {
 * 		"url": String,
 * 		"name": String
 * }
 *
 */
public class NamedApiResource {
	private String url;
	private String name;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "NamedApiResource [url=" + url + ", name=" + name + "]";
	}
}
