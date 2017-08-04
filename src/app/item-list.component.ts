import { Component } from '@angular/core';

@Component({
  selector: 'item-list',
  template: `
    <h2>Items from JSON File</h2>

    <div *ngFor="let item of ('items.json' | fetch) ">
      {{item.name}}
    </div>

    <p>Items as JSON:
      {{'items.json' | fetch | json}}
    </p>`
})
export class ItemListComponent { }
