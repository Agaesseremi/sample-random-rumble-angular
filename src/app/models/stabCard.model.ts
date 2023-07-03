import { Card } from "./card.model";
import { StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export class StabCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);

    }

    action(store: Store<GameState>) {
        store.dispatch(StabMonster({ damage: 20, manaCost: this.manaCost }));
    }
}

