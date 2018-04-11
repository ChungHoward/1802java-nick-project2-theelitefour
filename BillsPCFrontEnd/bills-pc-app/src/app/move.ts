export class Move {
  id: number;
  name: string;
  accuracy: number;
  effect: string;
  effectChance: number;
  pp: number;
  power: number;
  damageClass: string;
  type: string;

  constructor() {
    this.id = null;
    this.name = null;
    this.accuracy = null;
    this.effect = null;
    this.effectChance = null;
    this.pp = null;
    this.power = null;
    this.damageClass = null;
    this.type = null;
  };
}
