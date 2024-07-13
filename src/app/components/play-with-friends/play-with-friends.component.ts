import { Component } from "@angular/core";
import {
    ButtonComponent,
    ButtonStyle,
} from "../utilities/button/button.component";
import { CardComponent, CardStyle } from "../utilities/card/card.component";
import { TextSnippetComponent } from "../../text-snippet/text-snippet.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-play-with-friends",
    standalone: true,
    imports: [
        ButtonComponent,
        CardComponent,
        TextSnippetComponent,
        RouterModule,
    ],
    templateUrl: `play-with-friends.component.html`,
    styles: ``,
})
export class PlayWithFriendsComponent {
    buttonStyles = ButtonStyle;
    cardStyles = CardStyle;

    handleMusicBtnClick() {}

    handleSoundBtnClick() {}

    handleHowToPlay() {
        alert("HOW TO PLAY");
    }
}
