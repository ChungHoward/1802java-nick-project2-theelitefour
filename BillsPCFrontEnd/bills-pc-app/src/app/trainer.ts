import { PokeAPI } from './pokemon';

export interface Trainer {
    id: number;
    name: string;
    password: string;
    role: number;
    sets: Array<PokeAPI>;
}
