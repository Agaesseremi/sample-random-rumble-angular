import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { hitMonster } from '../../actions/player.action';
import { hitBack } from '../../actions/monster.action';
import { clearCheckIfPlayed, drawCard, initHand } from "../../actions/game.action";
import { incrementGameTurn } from "../../actions/game.action";
import { map } from 'rxjs/operators';
import { HandService } from 'src/app/services/hand-service.service';


@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss']
})
export class ButtonCapacityComponent {
  @Input() player?: any;
  checkIfPlayed: number[] = [];
  gameTurn: number = 1;


  constructor(private store: Store<{ game: GameState }>, private handService: HandService) {
    store.pipe(
      select('game'),
      map((gameState: GameState) => {
        return gameState.checkIfPlayed;
      })
    ).subscribe((checkIfPlayed) => {
      this.checkIfPlayed = checkIfPlayed;
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
    console.log(this.gameTurn);
    this.store.dispatch(hitBack({ damage: 10 }))
    // this.store.dispatch(drawCard())//add a card to the hand (need to do)
    let hand = this.handService.getRandomCards(4);
    this.store.dispatch(initHand({ hand }))
    // this.handService.generateRandomHand();
  }

}