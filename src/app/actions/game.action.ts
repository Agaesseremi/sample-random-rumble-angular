import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';

export const clearCheckIfPlayed = createAction('[Game] Clear Check If Played');

export const incrementGameTurn = createAction('[Game] Increment Game Turn', props<{ manaMax: number }>());

export const drawCard = createAction('[Game] Draw a card');

export const hideCard = createAction('[Game] hide a card');

export const updateHand = createAction(
    '[Game] Update Hand',
    props<{ hand: Card[] }>()
);