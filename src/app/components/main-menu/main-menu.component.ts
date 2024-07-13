import { ButtonStyle } from "./../utilities/button/button.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "../utilities/button/button.component";
import { Route, Router, RouterModule } from "@angular/router";

@Component({
    selector: "app-main-menu",
    standalone: true,
    imports: [CommonModule, ButtonComponent, RouterModule],
    templateUrl: `main-menu.component.html`,
    styles: ``,
})
export class MainMenuComponent {
    buttonStyles = ButtonStyle;

    constructor(private router: Router) {}

    handleMusicBtnClick() {}

    handleSoundBtnClick() {}

    handlePlayWithFriendsBtnClick() {
        console.log("handlePlayWithFriendsBtnClick");
        this.router.navigate(["/play/friends"]);
    }

    handlePlayOnlineBtnClick() {
        console.log("handlePlayOnlineBtnClick");
        this.router.navigate(["/play/online"]);
    }
}
