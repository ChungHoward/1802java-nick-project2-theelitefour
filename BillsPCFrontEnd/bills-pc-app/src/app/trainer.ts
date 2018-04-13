import { PokeAPI } from './pokemon';

export interface Trainer {
    trainerId: number;
    name: string;
    password: string;
    role: number;
    sets: Array<PokeAPI>;
}
