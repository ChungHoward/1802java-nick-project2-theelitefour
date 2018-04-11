import { Set } from './set';

export interface Trainer {
    id: number;
    name: string;
    password: string;
    role: number;
    sets: Array<Set>;
}
