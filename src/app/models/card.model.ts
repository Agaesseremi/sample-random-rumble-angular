import { StabCard } from "./stabCard.model";
import { HealCard } from "./healingCard.model";
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export interface ICard {
    id: number;
    name: string;
    manaCost: number;
    description: string;

}
abstract class C implements ICard {
    id: number;
    name: string;
    manaCost: number;
    description: string;


    constructor(private store: Store<{ game: GameState }>, id: number, name: string, manaCost: number, description: string) {
        this.id = id;
        this.name = name;
        this.manaCost = manaCost;
        this.description = description;
    }
}

export class Card {
    name: string;
    manaCost: number;
    id: number;
    description: string;

    constructor(name: string, manaCost: number, id: number, description: string) {
        this.name = name;
        this.manaCost = manaCost;
        this.id = id;
        this.description = description;
    }
}



