import { CardStateEnum } from './card-state.enum';

export interface Card {
    name: string;
    url: string;
    state: CardStateEnum;
}