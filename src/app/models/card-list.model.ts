import { StabCard } from "./stabCard.model";
import { HealCard } from "./healingCard.model";
import { Card } from "./card.model";
import { ProtectionCard } from "./protectionCard";
import { RollHandCard } from "./rollHandCard";
import { SunderCard } from "./sunderCard";
import { AddManaMaxCard } from "./addManaMaxCard";


// Le state initial contiendra nos 4 joueurs
export const initialCards: Card[] = [
    new StabCard('Stab', 20, 1, 'stab the enemie for 20dmg'),
    new HealCard('Heal', 30, 2, 'gain 20pv'),
    new ProtectionCard('protection', 30, 3, 'protection'),
    new RollHandCard('rollhand', 30, 4, 'roll hand'),
    new SunderCard('big hit', 50, 5, 'big hit'),
    new AddManaMaxCard('add mana max', 30, 6, 'add mana max')
];