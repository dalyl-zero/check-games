import { Component, Input } from "@angular/core";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [],
    template: `
        <button [className]="className" [disabled]="disabled">
            <ng-content></ng-content>
        </button>
    `,
    styles: ``,
})
export class ButtonComponent {
    @Input() className = "";
    @Input() disabled?: string | boolean = false;

    protected defaultStyle =
        "bg-white transition-colors hover:bg-indigo-700 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded";

    constructor() {
        this.className = this.defaultStyle;
    }

    ngOnChanges() {
        this.className = [
            ...new Set([
                ...this.defaultStyle.split(" "),
                ...this.className.split(" "),
            ]),
        ].join(" ");
    }
}
