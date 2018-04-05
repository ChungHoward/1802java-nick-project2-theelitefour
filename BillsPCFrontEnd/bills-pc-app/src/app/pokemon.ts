export interface Pokemon {
  name: string;
  types: Array<string>;
  stats: Array<number>;
  moveset: Array<string>;
  sprite_url: string;
}

interface PokeAPI {
  id: number;
  name: string;
  types: Array<Type>; // use Type.slot (1 or 2) && Type.type.name (fire, grass, etc)
  stats: Array<Stat>; // use Stat.stat.name ('special-attack, speed, etc') && Stat.base_stat (number)
  moves: Array<Move>; // use Move.move.name | Move.move.url | Move.version_group_details (Detail)
  sprites: Sprite;    // use sprites.front_default (url string)
}

interface Type {
  slot: number;
  type: TypeName;
}

interface TypeName {
  url: string;
  name: string;
}

interface Stat {
  stat: StatName;
  effort: number;
  base_stat: number;
}

interface StatName {
  url: string;
  name: string;
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

interface UrlName {
  url: string;
  name: string; // red-blue or yellow
}

interface Attack {
  url: string;
  name: string;
}

interface Sprite {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
