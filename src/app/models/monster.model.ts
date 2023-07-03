export interface IMonster {
    id: number;
    name: string;
    pvMax: number,
    pv: number,
}

export const initialMonster: IMonster = {
    id: 1,
    name: 'Nicole Bolas',
    pvMax: 800,
    pv: 800,
};
