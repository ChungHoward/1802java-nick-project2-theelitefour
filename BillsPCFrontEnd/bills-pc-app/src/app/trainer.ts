import { PokeAPI } from './pokemon';

export interface Trainer {
    id: number;
    username: string;
    password: string;
    role: number;
    sets: Array<PokeAPI>;
}
