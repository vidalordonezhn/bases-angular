import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increaseBy(+1)">Aumentar +1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">Disminuir -1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
