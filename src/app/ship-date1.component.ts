import { Component } from '@angular/core';

@Component({
  selector: 'item-shipdate',
  template: `<p>The item's ship date is {{ shipdate | date }}</p>`
})
export class ItemShipDateComponent {
  shipdate = new Date(2018, 3, 15); // April 15, 2018
}
