import { Store } from "@ngrx/store";
import { Card } from "./card.model";
import { GameState } from "../reducers/game.reducer";
import { MonsterRemoveProtection } from "../actions/monster.action";
import { th } from "@faker-js/faker";

export class BreakShield extends Card {


    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);

    }

    action(store: Store<GameState>) {
        store.dispatch(MonsterRemoveProtection({ manaCost: this.manaCost }))
    }
}

