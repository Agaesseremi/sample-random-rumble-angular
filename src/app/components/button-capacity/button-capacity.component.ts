import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { hitMonster } from '../../actions/player.action';
import { MonsterGetProtection, MonsterHeal, hitBack } from '../../actions/monster.action';
import { RemoveProtection, clearCheckIfPlayed, drawCard, initHand } from "../../actions/game.action";
import { incrementGameTurn } from "../../actions/game.action";
import { map } from 'rxjs/operators';
import { HandService } from 'src/app/services/hand-service.service';
import { Card } from 'src/app/models/card.model';


@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss']
})
export class ButtonCapacityComponent {
  @Input() player?: any;
  checkIfPlayed: number[] = [];
  gameTurn: number = 1;
  protection: number = 0;





  constructor(private store: Store<{ game: GameState }>, private handService: HandService) {
    store.pipe(
      select('game'),
      map((gameState: GameState) => {
        return gameState.protection;
      })
    ).subscribe((protection) => {
      this.protection = protection;
    });
    store.pipe(
      select('game'),
      map((gameState: GameState) => {
        return gameState.gameTurn;
      })
    ).subscribe((gameTurn) => {
      this.gameTurn = gameTurn;
    });
  }

  onClick() {
    const manaMax = this.player.manaMax;;
    this.store.dispatch(incrementGameTurn({ manaMax: manaMax }));
    if (this.protection === 1) {
      this.store.dispatch(RemoveProtection())
    } else {
      const randomDamage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      this.store.dispatch(hitBack({ damage: randomDamage }));

    }

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
      this.store.dispatch(MonsterGetProtection())
    }

    const randomNumberForHeal = Math.floor(Math.random() * 10) + 1;
    if (randomNumberForHeal === 1) {
      const randomHeal = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
      this.store.dispatch(MonsterHeal({ heal: randomHeal }))
    }


    // this.store.dispatch(drawCard())//add a card to the hand (need to do)

    this.store.dispatch(clearCheckIfPlayed());

    let hand = this.handService.getRandomCards(4);
    this.store.dispatch(initHand({ hand }))
    // this.handService.generateRandomHand();
  }


}