import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-home-component',
    standalone: true,
    templateUrl: 'home.component.html',
    styles: ``,
    imports: [NavbarComponent, ButtonComponent]
})
export class HomeComponent {
  title = 'CheckGames';

}
