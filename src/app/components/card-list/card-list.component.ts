import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { StabCard } from "../../models/stabCard.model";
import { HealCard } from "../../models/healingCard.model";
import { map } from 'rxjs/operators';
import { Card } from "../../models/card.model";
import { Player } from 'src/app/models/player.model';
import { updateHand } from 'src/app/actions/game.action';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards?: Card[];
  player?: Player;
  hand?: Card[];



  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) {

  }

  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.cards = game.cards;
      this.player = game.player;
      this.hand = game.hand;
      // Randomly select 4 cards from the 'cards' arrayo
      // You can use any randomization logic here
      this.hand = this.getRandomCards([...this.cards], 4);

      console.log(this.hand);



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