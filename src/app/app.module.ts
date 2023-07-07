import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MonsterComponent } from './components/monster/monster.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ButtonCapacityComponent } from './components/button-capacity/button-capacity.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { gameReducer } from './reducers/game.reducer';
import { ButtonCardCapacityComponent } from '../app/components/button-card-capacity/button-card-capacity.component';
import { ModalComponent } from './components/modal/modal.component';
import { RestartButtonComponent } from './components/restart-button/restart-button.component';
import { ModalLooseComponent } from './components/modal-loose/modal-loose.component';
import { ButtonModalComponent } from './components/button-modal/button-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    PlayerListComponent,
    PlayerCardComponent,
    ProgressBarComponent,
    ButtonCapacityComponent,
    CardListComponent,
    CardComponent,
    ButtonCardCapacityComponent,
    ModalComponent,
    RestartButtonComponent,
    ModalLooseComponent,
    ButtonModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ game: gameReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
