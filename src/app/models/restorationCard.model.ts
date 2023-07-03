import { Store } from "@ngrx/store";
import { Card } from "./card.model";
import { GameState } from "../reducers/game.reducer";
import { HealPlayer } from "../actions/card.action";

export class RestorationCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);

    }

    action(store: Store<GameState>) {
        const randomHeal = Math.floor(Math.random() * (50 - 20 + 1)) + 10;
        store.dispatch(HealPlayer({ heal: randomHeal, manaCost: this.manaCost }));
    }
}

