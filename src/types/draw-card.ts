import { Card } from "./card";

export interface DrawCard {
    success: boolean;
    deck_id: string;
    cards: Array<Card>;
    remaining: number;
}

