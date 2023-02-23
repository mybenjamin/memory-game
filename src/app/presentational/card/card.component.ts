import { Component } from '@angular/core';
import { CardStateEnum } from 'src/app/models/card-state.enum';
import { cardFlip } from '../../animations/card-flip.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [cardFlip]
})
export class CardComponent {
  state = CardStateEnum.normal;

  onCardClick(): void {
    if (this.state !== CardStateEnum.normal) {
      this.state = CardStateEnum.normal;
      return;
    }
    this.state = CardStateEnum.flipped;
  }
}
