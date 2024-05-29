import { Card } from './../../../../types/card';
import { Component, Input } from '@angular/core';

export enum CardStyle {
  Default = "grid grid-cols-1 h-max gap-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg p-5 hover:hue-rotate-90 group justify-items-center text-center",
  DarkMode = "grid grid-cols-1 h-max gap-6 bg-gray-100 text-gray-800 rounded-lg p-5 hover:hue-rotate-90 group justify-items-center text-center",
  Min = "bg-white p-6 rounded-lg shadow-lg",
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div [className]="className">
        <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class CardComponent {
  @Input() className = "";
  @Input() text = "Button works!";
  @Input() style: CardStyle = CardStyle.Default;

  constructor() {
    this.className = this.style;
  }

  ngOnChanges() {
    this.className = [...new Set([...this.style.split(" "), ...this.className.split(" ")])].join(" ");
  }
}
