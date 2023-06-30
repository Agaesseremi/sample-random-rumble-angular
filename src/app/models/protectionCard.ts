import { Card } from "./card.model";
import { StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export class ProtectionCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string) {
        super(name, manaCost, id, description);

    }

    action(store: Store<GameState>) {
        console.log('protection');
    }
}

export const initialStabCard: ProtectionCard = new ProtectionCard('protection', 3, 1, 'protection');