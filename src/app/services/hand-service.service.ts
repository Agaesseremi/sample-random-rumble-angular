import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from "../models/card.model";
import { Store } from '@ngrx/store';
import { GameState } from '../reducers/game.reducer';
import { Player } from '../models/player.model';
import { IMonster } from '../models/monster.model';
import { openLooseModal, openModal } from '../actions/game.action';

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
      const cardsCopy = [...state.cards]; // Make a copy of the array

      while (randomCards.length < count) {
        const randomIndex = Math.floor(Math.random() * cardsCopy.length);
        randomCards.push(cardsCopy.splice(randomIndex, 1)[0]);
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
          this.openModal();
        } else {
          console.log("Congratulations! You won!");
          this.openModal();
        }
      }
    });
  }
  openModal() {
    this.store.dispatch(openModal())
  }

  openLooseModal() {
    this.store.dispatch(openLooseModal())
  }

}