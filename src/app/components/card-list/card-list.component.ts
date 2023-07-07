import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { Card } from "../../models/card.model";
import { Player } from 'src/app/models/player.model';
import { initHand } from 'src/app/actions/game.action';
// import { HandService } from '../../services/hand-service.service

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards?: Card[];
  player?: Player;
  hand?: Card[];
  randomHandGenerated = false; // Flag to track if the random hand has been generated
  checkIfPlayed: Array<number> = [];

  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) { }

  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.cards = game.cards;
      this.player = game.player;
      this.checkIfPlayed = game.checkIfPlayed;
      console.log(this.checkIfPlayed);

      let hand: Card[] = []
      if (game.hand.length === 0) { // Generate random hand only if it hasn't been generated before
        hand = this.getRandomCards([...this.cards], 4);
        this.store.dispatch(initHand({ hand }))
      }
      this.hand = game.hand.length ? game.hand : hand
      // console.log(this.checkIfPlayed);

    })
  }

  getRandomCards(cards: Card[], count: number): Card[] {
    const randomCards: Card[] = [];

    while (randomCards.length < count && cards.length > 0) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      randomCards.push(cards.splice(randomIndex, 1)[0]);
    }

    return randomCards;
  }
}