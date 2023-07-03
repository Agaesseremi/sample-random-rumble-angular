import { StabCard } from "./stabCard.model";
import { HealCard } from "./healingCard.model";
import { Card } from "./card.model";
import { ProtectionCard } from "./protectionCard";
import { RollHandCard } from "./rollHandCard";
import { SunderCard } from "./sunderCard";
import { AddManaMaxCard } from "./addManaMaxCard";
import { RestorationCard } from "./restorationCard.model";


// Le state initial contiendra nos 4 joueurs
export const initialCards: Card[] = [
    new StabCard('Stab', 1, 1, 'stab the enemie for 20dmg', 'stab.jpeg'),
    new HealCard('Heal', 2, 2, 'gain 20pv', 'heal.jpeg'),
    new ProtectionCard('protection', 3, 3, 'protection from damage for 1 turn', 'protection.jpeg'),
    new RollHandCard('brainstrom', 3, 4, 'discard your hand thn draw 3 cards', 'brainstorm.jpeg'),
    new SunderCard('firaball', 5, 5, 'firaball !!!', 'fireball.jpeg'),
    new AddManaMaxCard('growth spiral', 3, 6, 'add 1 to your manamax', 'growth-spiral.jpeg'),
    new RestorationCard('restoration', 4, 7, 'restore between 20 to 50 hp', 'restoration.jpeg')
];