import { Component, Input } from '@angular/core';
import { Card } from "../../models/card.model";
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { CheckIfPlayed, hideCard } from 'src/app/actions/game.action';
import { HandService } from 'src/app/services/hand-service.service';
import { map } from 'rxjs';




@Component({
  selector: 'app-button-card-capacity',
  templateUrl: './button-card-capacity.component.html',
  styleUrls: ['./button-card-capacity.component.scss']
})
export class ButtonCardCapacityComponent {
  MonsterProtection: boolean = false;


  constructor(private store: Store<{ game: GameState }>, private handService: HandService) {
    store.pipe(
      select('game'),
      map((gameState: GameState) => {
        return gameState.MonsterProtection;
      })
    ).subscribe((MonsterProtection) => {
      this.MonsterProtection = MonsterProtection;
    });

  }
  @Input() Card?: any
  @Input() Player?: any;
  onClick() {


    if (this.Player.mana >= this.Card.manaCost) {
      if (this.MonsterProtection === false) {
        this.Card.action(this.store);
        this.store.dispatch(hideCard())//hide the card in the view(need to do)
        let Id = this.Card.id
        this.store.dispatch(CheckIfPlayed({ playerId: Id }));
      }

    }
    if (this.Player.mana >= this.Card.manaCost) {
      if (this.MonsterProtection === true && (this.Card.name !== 'fireball' && this.Card.name !== 'Stab')) {
        this.Card.action(this.store);
        this.store.dispatch(hideCard()); // hide the card in the view (need to do)
        let Id = this.Card.id
        this.store.dispatch(CheckIfPlayed({ playerId: Id }));

      }
    }

  }


}
