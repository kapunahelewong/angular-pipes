import { Component } from '@angular/core';

@Component({
  selector: 'exponent-calculator',
  template: `
    <h2>Exponent Calculator</h2>
    <div>Enter a number: <input [(ngModel)]="num"></div>
    <div>Exponent: <input [(ngModel)]="factor"></div>
    <p>
      Answer: {{ num | exponential: factor }}
    </p>
  `
})
export class ExponentCalculatorComponent {
  num = 2;
  factor = 10;
}
