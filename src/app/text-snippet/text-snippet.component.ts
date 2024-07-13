import { ButtonStyle } from "./../components/utilities/button/button.component";
import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../components/utilities/button/button.component";

@Component({
    selector: "app-text-snippet",
    standalone: true,
    imports: [ButtonComponent],
    template: `
        <div
            class="flex items-center justify-between p-2 px-4  rounded-lg gap-2 bg-slate-600 text-orange-300 text-xl overflow-hidden"
        >
            <code class="inline-block overflow-hidden w-10/12 text-ellipsis">{{
                text
            }}</code>
            <app-button
                [style]="ButtonStyles.Classic"
                className="grow w-max"
                (click)="copyText()"
                ><i class="bx bx-copy"></i> Copy</app-button
            >
        </div>
    `,
    styles: `:host { width: min(90%, 450px)}
    `,
})
export class TextSnippetComponent {
    @Input() text: string = "Text Here";
    @Input() successMessage: string = "Text copied to clipboard!";
    ButtonStyles = ButtonStyle;

    copyText() {
        navigator.clipboard
            .writeText(this.text)
            .then(() => {
                alert(this.successMessage);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    }
}
