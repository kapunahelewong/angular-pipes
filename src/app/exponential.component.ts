import { Component } from '@angular/core';

@Component({
  selector: 'exponential',
  template: `
    <h2>Exponential</h2>
    <p>2<sup>10</sup> = {{2 | exponential: 10}}</p>
  `
})
export class ExponentialComponent { }
