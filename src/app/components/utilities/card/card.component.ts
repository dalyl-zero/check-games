import { Card } from "./../../../../types/card";
import { Component, Input } from "@angular/core";
import { twMerge } from "tailwind-merge";

export enum CardStyle {
    Default = "grid grid-cols-1 h-max gap-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg p-5 group justify-items-center text-center",
    DarkMode = "grid grid-cols-1 h-max gap-6 bg-gray-100 text-gray-800 rounded-lg p-5 group justify-items-center text-center",
    Min = "group flex flex-col justify-center items-center gap-6 p-5 rounded-lg shadow-lg",
    ShadowLess = "group flex flex-col justify-center items-center gap-6 p-5 rounded-lg",
}

@Component({
    selector: "app-card",
    standalone: true,
    imports: [],
    template: `
        <div [className]="_className">
            <ng-content></ng-content>
        </div>
    `,
    styles: ``,
})
export class CardComponent {
    @Input() className = "";
    @Input() text = "Button works!";
    @Input() style: CardStyle = CardStyle.Default;
    _className = "";

    constructor() {}

    ngOnInit() {
        this._className = twMerge(this.style, this.className);
    }
    ngOnChanges() {
        // this.className = [...new Set([...this.style.split(" "), ...this.className.split(" ")])].join(" ");
        this._className = twMerge(this.style, this.className);
    }
}
