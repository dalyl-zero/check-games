import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { ButtonComponent } from "../utilities/button/button.component";
import { CardComponent, CardStyle } from "../utilities/card/card.component";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

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
    imports: [CommonModule, NavbarComponent, ButtonComponent, CardComponent],
})
export class HomeComponent {
    route = inject(ActivatedRoute);
    title = "CheckGames";
    cardStyles = CardStyle;
    @ViewChild("carousel") carousel!: ElementRef;

    constructor(private router: Router) {}

    handlePlayNow() {
        console.log("Play now!");
        this.router.navigate(["/play"]);
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
