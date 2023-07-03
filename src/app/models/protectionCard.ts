import { Card } from "./card.model";
import { Protection, StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { RemoveProtection } from "../actions/game.action";


export class ProtectionCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);

    }

    action(store: Store<GameState>) {

        store.dispatch(Protection({ manaCost: this.manaCost }))
    }
}

