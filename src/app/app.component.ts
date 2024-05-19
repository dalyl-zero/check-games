import { Component } from '@angular/core';
import { CardService } from './card.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: "app.html",
  styles: []
})
export class AppComponent {
  constructor(private CardService: CardService) {
    this.CardService.shuffleCards()
    .pipe(
      tap(response => {
        console.log(response);
      }),
      switchMap(() => {
        return this.CardService.distributeCards(4)
      })
    )
    .subscribe(response => {
      console.log(response);
      
    })
  }
}
