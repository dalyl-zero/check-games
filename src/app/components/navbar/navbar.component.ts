import { Component, EventEmitter, Output } from "@angular/core";
import { ButtonComponent } from "../utilities/button/button.component";

@Component({
    selector: "app-navbar",
    standalone: true,
    templateUrl: "navbar.component.html",
    styles: ``,
    imports: [ButtonComponent],
})
export class NavbarComponent {
    @Output() onPlayButtonClick = new EventEmitter<null>();
    handlePlayNow() {
        this.onPlayButtonClick.emit();
    }
}
