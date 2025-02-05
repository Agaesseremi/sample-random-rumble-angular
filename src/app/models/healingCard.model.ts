import { Store } from "@ngrx/store";
import { Card } from "./card.model";
import { GameState } from "../reducers/game.reducer";
import { HealPlayer } from "../actions/card.action";

export class HealCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);

    }

    action(store: Store<GameState>) {
        store.dispatch(HealPlayer({ heal: 20, manaCost: this.manaCost }));
    }
}

