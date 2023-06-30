import { Card } from "./card.model";
import { AddManaMax, StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export class AddManaMaxCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string) {
        super(name, manaCost, id, description);

    }

    action(store: Store<GameState>) {
        store.dispatch(AddManaMax({ addManaMax: 10, manaCost: 30 }));


    }
}

export const initialStabCard: AddManaMaxCard = new AddManaMaxCard('add mana max', 30, 6, 'add mana max');