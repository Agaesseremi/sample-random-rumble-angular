import { Component } from '@angular/core';
import { HandService } from './services/hand-service.service';
import { GameState } from './reducers/game.reducer';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'random-rumble';
  isModalOpen: boolean = false;
  isLooseModalOpen: boolean = false;



  constructor(private store: Store<{ game: GameState }>, private handService: HandService) {
  }

  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.isModalOpen = game.isModalOpen;
      this.isLooseModalOpen = game.isLooseModalOpen;

    });
  }




}
