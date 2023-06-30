import { createAction, props } from '@ngrx/store';

export const hitBack = createAction('[Monster] Attack Player', props<{ damage: number; }>());
