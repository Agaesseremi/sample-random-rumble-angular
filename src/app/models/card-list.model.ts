import { StabCard } from "./stabCard.model";
import { HealCard } from "./healingCard.model";
import { Card } from "./card.model";
import { ProtectionCard } from "./protectionCard";
import { RollHandCard } from "./rollHandCard";
import { SunderCard } from "./sunderCard";
import { AddManaMaxCard } from "./addManaMaxCard";


// Le state initial contiendra nos 4 joueurs
export const initialCards: Card[] = [
    new StabCard('Stab', 3, 1, 'stab the enemie for 20dmg'),
    new HealCard('Heal', 2, 2, 'gain 20pv'),
    new ProtectionCard('protection', 3, 1, 'protection'),
    new RollHandCard('rollhand', 3, 1, 'roll hand'),
    new SunderCard('big hit', 3, 1, 'big hit'),
    new AddManaMaxCard('add mana max', 3, 1, 'add mana max')
];