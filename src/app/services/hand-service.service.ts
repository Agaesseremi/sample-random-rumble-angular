import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from "../models/card.model";
import { Store } from '@ngrx/store';
import { GameState } from '../reducers/game.reducer';
import { Player } from '../models/player.model';
import { IMonster } from '../models/monster.model';

@Injectable({
  providedIn: 'root'
})
export class HandService {
  private handSource = new BehaviorSubject<Card[]>([]);
  currentHand = this.handSource.asObservable();
  player?: Player;
  monster?: IMonster;

  constructor(private store: Store<{ game: GameState }>) { }


  updateHand(hand: Card[]) {
    this.handSource.next(hand);
  }

  getRandomCards(count: number): Card[] {
    const randomCards: Card[] = [];

    this.store.select((state) => state.game).subscribe((state) => {
      while (randomCards.length < count) {
        console.log(randomCards);
        const randomIndex = Math.floor(Math.random() * state.cards.length);
        randomCards.push(state.cards.splice(randomIndex, 1)[0]);
      }
    });

    return randomCards;
  }

  checkGameStatus() {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.player = game.player;
      this.monster = game.monster;

      if (this.player.pv <= 0 || this.monster.pv <= 0) {
        if (this.player.pv <= 0) {
          console.log("Game over. You lost!");
        } else {
          console.log("Congratulations! You won!");
        }
      }
    });
  }
}