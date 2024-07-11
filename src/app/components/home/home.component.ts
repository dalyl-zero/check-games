import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { ButtonComponent } from "../utilities/button/button.component";
import { CardComponent, CardStyle } from "../utilities/card/card.component";

@Component({
    selector: "app-home-component",
    standalone: true,
    templateUrl: "home.component.html",
    // styles: `
    //   .testimonial-carousel {
    //     display: flex;
    //     overflow: hidden;
    //     scroll-snap-type: x mandatory;
    //   }
    //   .testimonial {
    //     scroll-snap-align: start;
    //     flex: 0 0 50%;
    //   }`,
    imports: [NavbarComponent, ButtonComponent, CardComponent],
})
export class HomeComponent {
    title = "CheckGames";
    cardStyles = CardStyle;
    @ViewChild("carousel") carousel!: ElementRef;

    handlePlayNow() {
        console.log("Play now!");
    }
    handleLearnMore() {}

    scrollLeft() {
        this.carousel.nativeElement.scrollBy({
            left: -this.carousel.nativeElement.clientWidth / 2,
            behavior: "smooth",
        });
    }

    scrollRight() {
        this.carousel.nativeElement.scrollBy({
            left: this.carousel.nativeElement.clientWidth / 2,
            behavior: "smooth",
        });
    }
}
