import { Component } from "@angular/core";
import {
    ButtonComponent,
    ButtonStyle,
} from "../utilities/button/button.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-play-online",
    standalone: true,
    imports: [ButtonComponent, RouterModule],
    templateUrl: `play-online.component.html`,
    styles: ``,
})
export class PlayOnlineComponent {
    buttonStyles = ButtonStyle;
    handleHowToPlay() {
        alert("HOW TO PLAY");
    }
}
