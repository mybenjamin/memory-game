import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly mockCardsUrl = '/assets/data/mock-cards.data.json';

  constructor(private http: HttpClient) {}

  get(): Observable<Card[]> {
    return this.http.get<Card[]>(this.mockCardsUrl);
  }
}
