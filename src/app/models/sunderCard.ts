import { Card } from "./card.model";
import { StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export class SunderCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string) {
        super(name, manaCost, id, description);

    }

    action(store: Store<GameState>) {
        store.dispatch(StabMonster({ damage: 75, manaCost: 50 }));
    }
}

export const initialStabCard: SunderCard = new SunderCard('big hit', 50, 5, 'big hit');