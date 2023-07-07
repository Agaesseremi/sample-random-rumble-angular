import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { openModal } from 'src/app/actions/game.action';
import { IMonster } from 'src/app/models/monster.model';
import { GameState } from 'src/app/reducers/game.reducer';


@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {
  monster?: IMonster;
  MonsterProtection!: boolean;
  subscription!: Subscription;


  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) {

  }

  // Lorsque le composant est initialisé la méthode ngOnInit se lance et initialise la propriété monster de notre composant
  //Ici nous récupérons le state Monster pour initialiser la propriété Monster de notre composants ce qui nous permet de l'utiliser dans monster.component.html
  ngOnInit(): void {
    this.MonsterProtection = false;
    this.subscription = this.store.select(state => state.game).subscribe((game: GameState) => {
      this.monster = game.monster;
      this.MonsterProtection = game.MonsterProtection;
      console.log(this.MonsterProtection);

      if (this.monster.pv <= 0 && game.isModalOpen === false) {
        this.store.dispatch(openModal())

      }
    });
  }
  ngOnDestroy() {
    // Désabonne de l'abonnement lors de la destruction du composant
    this.subscription.unsubscribe();
  }
}