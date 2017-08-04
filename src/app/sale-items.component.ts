import { Component }              from '@angular/core';

import { ITEMS }                 from './items';

@Component({
  selector: 'sale-items',
  templateUrl: './sale-items.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class SaleItemsComponent {
  items: any[] = [];
  onSale = true;
  mutate = true;
  title = 'Sale Items (pure pipe)';

  constructor() { this.reset(); }

  addItem(name: string) {
    name = name.trim();
    if (!name) { return; }
    let item = {name, onSale: this.onSale};
    if (this.mutate) {
    // Pure pipe won't update display because heroes array reference is unchanged
    // Impure pipe will display
    this.items.push(item);
    } else {
      // Pipe updates display because heroes array is a new object
      this.items = this.items.concat(item);
    }
  }

  reset() { this.items = ITEMS.slice(); }
}

////// Identical except for impure pipe //////
@Component({
  selector: 'sale-items-impure',
  templateUrl: './sale-items-impure.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
})
export class SaleItemsImpureComponent extends SaleItemsComponent {
  title = 'Sale Items (impure pipe)';
}
