import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  player?: Player;

  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.player = game.player;
    });
  }
}
