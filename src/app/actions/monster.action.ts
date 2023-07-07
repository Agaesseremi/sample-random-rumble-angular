import { createAction, props } from '@ngrx/store';

export const hitBack = createAction('[Monster] Attack Player', props<{ damage: number; }>());

export const MonsterGetProtection = createAction('[Monster] get protection');

export const MonsterRemoveProtection = createAction('[Monster] remove protection', props<{ manaCost: number; }>());

export const MonsterHeal = createAction('[Monster] heal the monster', props<{ heal: number; }>());




