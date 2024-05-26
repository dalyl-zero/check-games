import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button [className]="_class">
      {{text}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() _class = "";
  defaultStyle = " bg-white transition-colors hover:bg-indigo-700 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded";
  @Input() text = "Button works!";

  constructor() {
    this._class = this.defaultStyle;
  }

  ngOnChanges() {
    this._class += this.defaultStyle;
  }
}
