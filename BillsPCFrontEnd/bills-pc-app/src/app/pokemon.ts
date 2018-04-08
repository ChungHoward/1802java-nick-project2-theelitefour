export class Pokemon {
  public id: number;
  public name: string;
  public sprites: string;
  public moveset: Array<string>;
  public moves: Array<Attack>;
  public stats: Stat;
  public types: Array<string>;
}
// Used to read pokeAPIjson
export interface PokeAPI {
  id: number;
  name: string;
  sprites: string;
  moveset: Array<string>; // attacks it knows
  moves: Array<Attack>; // attacks it can learn
  stats: Stat;
  types: Array<string>;
}

export interface Stat {
  satk: number;
  def: number;
  atk: number;
  hp: number;
  sdef: number;
  spe: number;
}

export interface UrlName {
  url: string;
  name: string; // red-blue or yellow
}


interface Move {
  version_group_details: Array<Detail>; // use Detail.version_group.name === red-blue || '' === yellow
  move: Attack;
}

interface Detail {
  move_learn_method: UrlName; // not important
  level_learned_at: number; // not important
  version_group: UrlName;
}

interface Attack {
  url: string;
  name: string;
}
