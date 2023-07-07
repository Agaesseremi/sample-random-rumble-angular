import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';

export const CheckIfPlayed = createAction('[Game] Check If Played', props<{ playerId: number }>());


export const clearCheckIfPlayed = createAction('[Game] Clear Check If Played');

export const incrementGameTurn = createAction('[Game] Increment Game Turn', props<{ manaMax: number }>());

export const drawCard = createAction('[Game] Draw a card');

export const hideCard = createAction('[Game] hide a card');

export const initHand = createAction(
    '[Game] Update Hand',
    props<{ hand: Card[] }>()
);

export const RemoveProtection = createAction('[Game] remove protection');

export const openModal = createAction('[Game] is open modal to true');

export const openLooseModal = createAction('[Game] is open loose  modal to true');

export const resetState = createAction('[Game] reset the state');




