export interface IPlayer {
    id: number;

    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    manaMax: number;
}
export class Player implements IPlayer {
    id: number;
    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    manaMax: number;

    constructor(id: number, name: string, pv: number, pvMax: number, mana: number, manaMax: number) {
        this.id = id;
        this.name = name;
        this.pv = pv;
        this.pvMax = pvMax;
        this.mana = mana;
        this.manaMax = manaMax;
    }
}

// Le state initial contiendra nos 4 joueurs
export const initialPlayers: IPlayer = new Player(1, 'John', 100, 100, 30, 30)
