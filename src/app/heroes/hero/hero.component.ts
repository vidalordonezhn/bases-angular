import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name: string = 'Iroman';
  age: number = 30;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  changeName(): void {
    this.name = 'SuperMan';
  }

  changeAge(): void {
    this.age = 22;
  }

  reset(): void {
    this.name = 'Ironman';
    this.age = 30;
  }
}
