import { Component } from '@angular/core';

@Component({
  selector: 'item-shipdate2',
  template: `
    <p>The item's ship date is {{ shipdate2 | date:format }}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
  `
})
export class ItemShipDate2Component {
  shipdate2 = new Date(2018, 3, 15); // April 15, 2018
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
