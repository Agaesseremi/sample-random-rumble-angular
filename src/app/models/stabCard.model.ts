import { Card } from "./card.model";
import { StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export class StabCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string) {
        super(name, manaCost, id, description);

    }

    action(store: Store<GameState>) {
        store.dispatch(StabMonster({ damage: 20, manaCost: 20 }));
    }
}

export const initialStabCard: StabCard = new StabCard('Stab', 20, 1, 'stab the enemie for 20dmg');