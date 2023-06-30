import { Component, Input } from '@angular/core';
import { Card } from "../../models/card.model";
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { hideCard } from 'src/app/actions/game.action';



@Component({
  selector: 'app-button-card-capacity',
  templateUrl: './button-card-capacity.component.html',
  styleUrls: ['./button-card-capacity.component.scss']
})
export class ButtonCardCapacityComponent {

  constructor(private store: Store<{ game: GameState }>) {

  }
  @Input() Card?: any
  @Input() Player?: any;
  onClick() {

    if (this.Player.mana >= this.Card.manaCost) {
      this.Card.action(this.store);
      this.store.dispatch(hideCard())//hide the card in the view
    }
  }

}
