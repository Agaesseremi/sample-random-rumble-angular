import { createAction, props } from '@ngrx/store';

export const StabMonster = createAction('[Card] Stab Monster', props<{ damage: number, manaCost: number }>());

export const HealPlayer = createAction('[Card] Heal Monster', props<{ heal: number, manaCost: number }>());

export const AddManaMax = createAction('[Card] add manaMax', props<{ addManaMax: number, manaCost: number }>());

export const RemoveMana = createAction('[Card] remove manaMax', props<{ manaCost: number }>());

