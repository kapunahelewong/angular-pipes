import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  shipdate = new Date(2018, 3, 15); // April 15, 2018
}
