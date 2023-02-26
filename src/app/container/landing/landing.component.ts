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
  previousCard: Card | null = null;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.startGame();
  }

  onCardClick(card: Card): void {
    if (card.state !== CardStateEnum.normal) return;

    if (!this.previousCard) {
      this.flipCard(card);
      this.previousCard = card;
      return;
    }

    if(card.name === this.previousCard?.name) {
      this.solveSelection(card);
      this.previousCard = null;
      return;
    }
    
    this.flipCard(card);
    this.resetSelection(card);
  }

  private startGame(): void {
    this.cardService.get().pipe(tap(cards => this.shuffleCards(cards)))
      .subscribe(response => this.gameState$.next(response));
  }

  private shuffleCards(cards: Card[]): Card[] {
    const shuffledCards = cards.sort(() => .5 - Math.random());
    return shuffledCards;
  }

  private async resetSelection(card: Card): Promise<void> {
    await this.delay(1000);
    if(this.previousCard) this.previousCard.state = CardStateEnum.normal;
    card.state = CardStateEnum.normal;
    this.previousCard = null;
  }

  private flipCard(card: Card): void {
    card.state = CardStateEnum.flipped;
  }

  private solveSelection(card: Card): void {
    card.state = CardStateEnum.solved;
    if(this.previousCard) this.previousCard.state = CardStateEnum.solved;
  }

  private delay(timeInMs: number) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
  }
}