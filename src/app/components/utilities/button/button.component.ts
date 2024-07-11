import { Component, EventEmitter, Input, Output } from "@angular/core";
import { twMerge } from "tailwind-merge";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [],
    template: `
        <button
            [className]="className"
            [disabled]="disabled"
            (click)="handleClick()"
        >
            <ng-content></ng-content>
        </button>
    `,
    styles: ``,
})
export class ButtonComponent {
    @Input() className = "";
    @Input() disabled?: string | boolean = false;
    @Output() onClick = new EventEmitter<null>();

    protected defaultStyle =
        "bg-white transition-colors delay-50 duration-300 hover:bg-indigo-700 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded";

    constructor() {
        this.className = this.defaultStyle;
    }

    ngOnChanges() {
        this.className = twMerge(this.defaultStyle, this.className);
    }

    handleClick() {
        this.onClick.emit();
    }
}
