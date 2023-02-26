import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardStateEnum } from 'src/app/models/card-state.enum';
import { Card } from 'src/app/models/card.model';
import { cardFlip } from '../../animations/card-flip.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [cardFlip]
})
export class CardComponent {
  @Input() config: Card | undefined;
  @Output() cardClicked = new EventEmitter<Card>()
  state = CardStateEnum.normal;

  onCardClick(): void {
    this.cardClicked.emit();
  }
}
