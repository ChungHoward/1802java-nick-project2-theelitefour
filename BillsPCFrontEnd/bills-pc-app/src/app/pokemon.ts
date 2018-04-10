// Used for temporary storage such as team building
export class Pokemon {
  id: number;
  trainerId: number;
  attackIds: Array<number>;
  name: string;
  sprite: string;
  moveset: Array<string>;
  moves: Array<Attack>; // currently empty
  stats: Stat;
  types: Array<string>;
  // A missingno for our placeholder!
  constructor() {
    this.id = 0;
    this.trainerId = 1;
    this.attackIds = [];
    this.name = 'missingno';
    this.sprite = 'assets/img/question.png';
    this.moveset = ['', '', '', ''];
    this.moves = [];
    this.stats = {hp: 33, atk: 136, def: 0, satk: 6, sdef: 6, spe: 29};
    this.types = ['normal'];
  }
}
// Used to read pokeAPIjson
export class PokeAPI {
  id: number;
  trainerId: number;
  attackIds: Array<number>;
  name: string;
  sprite: string;
  moveset: Array<string>; // attacks it knows, currently empty
  moves: Array<Attack>; // attacks it can learn
  stats: Stat;
  types: Array<string>;

  constructor() {
    this.id = 0;
    this.trainerId = 1;
    this.attackIds = [];
    this.name = 'missingno';
    this.sprite = 'assets/img/question.png';
    this.moveset = ['', '', '', ''];
    this.moves = [];
    this.stats = {hp: 33, atk: 136, def: 0, satk: 6, sdef: 6, spe: 29};
    this.types = ['normal'];
  }
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

interface Attack {
  url: string;
  name: string;
}
