export class Move {
  public name: string;
  public type: UrlName;
  public accuracy: number;
  public pp: number;
  public power: number;
  public damage_class: UrlName;
  public effect_entries: Array<Effect>;
  public effect_chance: number;
}

class UrlName {
  url: string;
  name: string;
}

class Effect {
  short_effect: string;
}
