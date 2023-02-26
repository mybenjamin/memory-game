import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CardStateEnum } from 'src/app/models/card-state.enum';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  gameState$ = new BehaviorSubject<Card[]>([]);
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.startGame();
  }

  onCardClick(card: Card): void {
    card.state = CardStateEnum.flipped;
  }

  private startGame(): void {
    this.cardService.get().pipe(tap(cards => this.shuffleCards(cards)))
      .subscribe(response => this.cards.push(...response));
    this.gameState$.next(this.cards);
  }

  private shuffleCards(cards: Card[]): Card[] {
    const shuffledCards = cards.sort(() => .5 - Math.random());
    return shuffledCards;
  }
}
