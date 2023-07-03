import { Card } from "./card.model";
import { RemoveMana, StabMonster } from '../actions/card.action';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { HandService } from 'src/app/services/hand-service.service';
import { initHand } from "../actions/game.action";

export class RollHandCard extends Card {
    constructor(name: string, manaCost: number, id: number, description: string, image: string) {
        super(name, manaCost, id, description, image);
    }

    action(store: Store<{ game: GameState }>) {
        const handService = new HandService(store); // Create an instance of HandService

        let hand = handService.getRandomCards(4);
        store.dispatch(RemoveMana({ manaCost: this.manaCost }));
        store.dispatch(initHand({ hand }));
    }
}

