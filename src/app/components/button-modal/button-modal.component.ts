import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetState } from 'src/app/actions/game.action';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.scss']
})
export class ButtonModalComponent {

  constructor(private store: Store<{ game: GameState }>) {

  }

  onClick() {
    this.store.dispatch(resetState());
  }
}
