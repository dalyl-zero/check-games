import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { DrawCard } from "../types/draw-card";
import { HttpClient } from "@angular/common/http";
import { ShuffleCard } from "../types/shuffle-card";

@Injectable({
    providedIn: "root"
})
export class CardService
{
    private readonly API_URL: string = "https://deckofcardsapi.com/api/deck/"
    private deckId: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor(private http: HttpClient) {}

    public shuffleCards(): Observable<ShuffleCard>
    {
        return this.http.get<ShuffleCard>(`${this.API_URL}/new/shuffle/?deck_count=1`).pipe(tap(response => {this.deckId.next(response.deck_id)}))
    }

    public distributeCards(numberOfCards: number): Observable<DrawCard>
    {
        if (!this.deckId.value) {
            return of();
        }
        return this.http.get<DrawCard>(`${this.API_URL}/${this.deckId.value}/draw/?count=${numberOfCards}`);
    }
}