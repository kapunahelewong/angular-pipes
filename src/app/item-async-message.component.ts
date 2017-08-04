import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'item-message',
  template: `
    <h2>Async Item Message and AsyncPipe</h2>
    <p>Message: {{ message$ | async }}</p>
    <button (click)="resend()">Resend</button>`,
})
export class ItemAsyncMessageComponent {
  message$: Observable<string>;

  private messages = [
    'Flash sale for your item!',
    'Your item promo code NG123!',
    'All items 40% off!'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = Observable.interval(500)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
}

// Alternative message$ formula:
// this.message$ = Observable.fromArray(this.messages)
//   .map(message => Observable.timer(500).map(() => message))
//   .concatAll();
