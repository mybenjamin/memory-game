import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  cards: Card[] = [];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.get().subscribe(response => this.cards.push(...response))
    console.log(this.cards)
  }
}
