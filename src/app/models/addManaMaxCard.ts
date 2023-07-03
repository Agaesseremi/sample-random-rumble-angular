import { Card } from "./card.model";
import { AddManaMax, StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


export class AddManaMaxCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);

    }

    action(store: Store<GameState>) {
        store.dispatch(AddManaMax({ addManaMax: 1, manaCost: this.manaCost }));


    }
}

