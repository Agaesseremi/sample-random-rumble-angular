import { Store } from "@ngrx/store";
import { Card } from "./card.model";
import { GameState } from "../reducers/game.reducer";
import { HealPlayer } from "../actions/card.action";

export class HealCard extends Card {


    constructor(name: string, manaCost: number, id: number, description: string) {
        super(name, manaCost, id, description);

    }

    action(store: Store<GameState>) {
        store.dispatch(HealPlayer({ heal: 20, manaCost: 20 }));
    }
}

export const initialHealCard: HealCard = new HealCard('Heal', 30, 2, 'gain 20pv');