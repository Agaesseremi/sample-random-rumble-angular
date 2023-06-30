import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from "../models/card.model";
import { Store } from '@ngrx/store';
import { GameState } from '../reducers/game.reducer';

@Injectable({
  providedIn: 'root'
})
export class HandService {
  private handSource = new BehaviorSubject<Card[]>([]);
  currentHand = this.handSource.asObservable();

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
}