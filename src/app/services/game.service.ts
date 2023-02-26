import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  saveState(state: Card[]): void {
    const gameState = JSON.stringify(state);
    localStorage.setItem('memory-game-state', gameState);
  }

  loadState(): Card[] | undefined {
    const state = localStorage.getItem('memory-game-state');
    if (!state) return;
    return JSON.parse(state) as Card[];
  }
}
