import { Component, EventEmitter, Input, Output } from "@angular/core";
import { twMerge } from "tailwind-merge";

export enum ButtonStyle {
    Default = "bg-white transition-colors delay-50 duration-300 hover:bg-indigo-700 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded",
    Icon = "py-2 px-4 rounded hover:text-indigo-500",
    Min = "border py-2 px-4 rounded",
    Classic = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
}

@Component({
    selector: "app-button",
    standalone: true,
    imports: [],
    template: `
        <button
            [className]="_className"
            [disabled]="disabled"
            (click)="handleClick()"
        >
            <ng-content></ng-content>
        </button>
    `,
    styles: ``,
})
export class ButtonComponent {
    _className = "";
    @Input() className = "";
    @Input() disabled?: string | boolean = false;
    @Output() onClick = new EventEmitter<null>();
    @Input() style: ButtonStyle = ButtonStyle.Default;

    protected defaultStyle =
        "bg-white transition-colors delay-50 duration-300 hover:bg-indigo-700 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded";

    constructor() {}

    ngOnInit() {
        this._className = twMerge(this.style, this.className);
    }

    ngOnChanges() {
        this._className = twMerge(this.style, this.className);
    }

    handleClick() {
        this.onClick.emit();
    }
}
