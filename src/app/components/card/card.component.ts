import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() Card?: any;
  @Input() Player?: any;
  @Input() disabled: boolean = false;
  checkIfPlayed: Array<number> = [];




  constructor(private store: Store<{ game: GameState }>) { }


  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.checkIfPlayed = game.checkIfPlayed;
      console.log(this.checkIfPlayed);
    })
  }
}
