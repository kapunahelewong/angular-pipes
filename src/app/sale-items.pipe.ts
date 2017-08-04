/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './items';

@Pipe({ name: 'saleItems' })
export class SaleItemsPipe implements PipeTransform {
  transform(allItems: Item[]) {
    return allItems.filter(item => item.onSale);
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: 'saleItemsImpure',
  pure: false
})
export class SaleItemsImpurePipe extends SaleItemsPipe {}
