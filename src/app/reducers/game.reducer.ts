import { Card } from "../models/card.model";
import { createReducer, createSelector, on } from '@ngrx/store';
import { IMonster, initialMonster } from '../models/monster.model';
import { IPlayer, initialPlayers } from '../models/player.model';
import { hitMonster } from '../actions/player.action';
import { hitBack } from '../actions/monster.action';
import { RemoveProtection, clearCheckIfPlayed, initHand } from "../actions/game.action";
import { incrementGameTurn } from "../actions/game.action";
import { initialCards } from "../models/card-list.model";
import { AddManaMax, HealPlayer, Protection, RemoveMana, StabMonster } from "../actions/card.action";
import { Player } from "../models/player.model";
import { state } from "@angular/animations";


export interface GameState {
    monster: IMonster;
    player: Player;
    checkIfPlayed: Array<number>;
    gameTurn: number;
    cards: Card[];
    hand: Card[];
    protection: number;
}

export const initialState: GameState = {
    monster: initialMonster,
    player: initialPlayers,
    checkIfPlayed: [],
    gameTurn: 1,
    cards: initialCards,
    hand: [],
    protection: 0,
};


export const gameReducer = createReducer(
    initialState,
    //method jeux de base

    on(initHand, (state, { hand }) => ({
        ...state,
        hand: hand
    })),

    on(hitMonster, (state, { damage }) => {
        return {
            ...state,
            monster: {
                ...state.monster,
                pv: state.monster.pv - damage
            }
        };
    }),
    on(AddManaMax, (state, { addManaMax, manaCost }) => {
        return {
            ...state,
            player: {
                ...state.player,
                manaMax: state.player.manaMax + addManaMax,
                mana: state.player.mana - manaCost
            }
        };
    }),
    on(StabMonster, (state, { damage, manaCost }) => {
        return {
            ...state,
            monster: {
                ...state.monster,
                pv: state.monster.pv - damage
            },
            player: {
                ...state.player,
                mana: state.player.mana - manaCost  // Updated the assignment
            }
        };
    }),
    on(HealPlayer, (state, { heal, manaCost }) => {
        return {
            ...state,
            player: {
                ...state.player,
                pv: state.player.pv + heal,
                mana: state.player.mana - manaCost  // Updated the assignment
            }
        };
    }),
    on(clearCheckIfPlayed, (state) => {
        return {
            ...state,
            checkIfPlayed: []
        };
    }),

    on(incrementGameTurn, (state, { manaMax }) => {
        console.log(manaMax);
        return {
            ...state,
            gameTurn: state.gameTurn + 1,
            player: {
                ...state.player,
                mana: manaMax
            }
        };
    }),
    on(hitBack, (state, { damage }) => {
        return {
            ...state,
            player: {
                ...state.player,
                pv: state.player.pv - damage
            }
        };
    }),
    on(RemoveMana, (state, { manaCost }) => {
        return {
            ...state,
            player: {
                ...state.player,
                mana: state.player.mana - manaCost
            }
        };
    }),
    on(Protection, (state, { manaCost }) => {
        return {
            ...state,
            protection: state.protection + 1,
            player: {
                ...state.player,
                mana: state.player.mana - manaCost
            }
        };
    }),
    on(RemoveProtection, (state) => {
        return {
            ...state,
            protection: state.protection - 1,
        };
    }),

    //fin method jeux de base 




);

