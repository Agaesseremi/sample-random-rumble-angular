import { Card } from "../models/card.model";
import { createReducer, createSelector, on } from '@ngrx/store';
import { IMonster, initialMonster } from '../models/monster.model';
import { IPlayer, initialPlayers } from '../models/player.model';
import { hitMonster } from '../actions/player.action';
import { MonsterGetProtection, MonsterHeal, MonsterRemoveProtection, hitBack } from '../actions/monster.action';
import { CheckIfPlayed, RemoveProtection, clearCheckIfPlayed, initHand, openLooseModal, openModal, resetState } from "../actions/game.action";
import { incrementGameTurn } from "../actions/game.action";
import { initialCards } from "../models/card-list.model";
import { AddManaMax, HealPlayer, Protection, RemoveMana, StabMonster } from "../actions/card.action";
import { Player } from "../models/player.model";
import { state } from "@angular/animations";


export interface GameState {
    monster: IMonster;
    player: Player;
    checkIfPlayed: number[];
    gameTurn: number;
    cards: Card[];
    hand: Card[];
    protection: number;
    MonsterProtection: boolean;
    isModalOpen: boolean;
    isLooseModalOpen: boolean;
}

export const initialState: GameState = {
    monster: initialMonster,
    player: initialPlayers,
    checkIfPlayed: [],
    gameTurn: 1,
    cards: initialCards,
    hand: [],
    protection: 0,
    MonsterProtection: false,
    isModalOpen: false,
    isLooseModalOpen: false,

};


export const gameReducer = createReducer(
    initialState,
    //method jeux de base

    on(resetState, (state) => initialState),

    on(openModal, (state) => ({
        ...state,
        isModalOpen: true
    })),
    on(openLooseModal, (state) => ({
        ...state,
        isLooseModalOpen: true
    })),

    on(initHand, (state, { hand }) => ({
        ...state,
        hand: hand
    })),

    on(MonsterGetProtection, (state) => ({
        ...state,
        MonsterProtection: true
    })),

    on(MonsterRemoveProtection, (state, { manaCost }) => ({
        ...state,
        MonsterProtection: false,
        player: {
            ...state.player,
            mana: state.player.mana - manaCost  // Updated the assignment
        }
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

    on(MonsterHeal, (state, { heal }) => {
        return {
            ...state,
            monster: {
                ...state.monster,
                pv: state.monster.pv + heal
            }
        }
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
    on(CheckIfPlayed, (state, { playerId }) => {
        console.log(playerId);
        return {
            ...state,
            checkIfPlayed: [...state.checkIfPlayed, playerId]
        };
    }),

    on(incrementGameTurn, (state, { manaMax }) => {
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

