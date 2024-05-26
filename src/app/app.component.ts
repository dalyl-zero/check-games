import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { switchMap, tap } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: "app.component.html",
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
