import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardStateEnum } from '../models/card-state.enum';

const normalToFlipped = (): string => `${CardStateEnum.flipped} => ${CardStateEnum.normal}`;
const flippedToNormal = (): string => `${CardStateEnum.normal} => ${CardStateEnum.flipped}`;

export const cardFlip =
    trigger('cardFlip', [
        state(
            CardStateEnum.normal,
            style({
                transform: 'none'
            })
        ),
        state(
            CardStateEnum.flipped,
            style({
                transform: 'rotateY(180deg)'
            })
        ),
        transition(normalToFlipped(), [animate('400ms')]),
        transition(flippedToNormal(), [animate('400ms')]),
    ]);
