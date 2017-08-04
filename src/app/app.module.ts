import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  SaleItemsComponent,
  SaleItemsImpureComponent
} from './sale-items.component';
import { ItemAsyncMessageComponent } from './item-async-message.component';
import { ItemShipDateComponent } from './ship-date1.component';
import { ItemShipDate2Component } from './ship-date2.component';
import { ItemListComponent } from './item-list.component';
import { ExponentialComponent } from './exponential.component';
import { ExponentCalculatorComponent } from './exponent-calculator.component';
import {
  SaleItemsPipe,
  SaleItemsImpurePipe
} from './sale-items.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
import { ExponentialPipe } from './exponential.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SaleItemsComponent,
    SaleItemsImpureComponent,
    ItemAsyncMessageComponent,
    ItemShipDateComponent,
    ItemShipDate2Component,
    ItemListComponent,
    ExponentialComponent,
    ExponentCalculatorComponent,
    SaleItemsPipe,
    SaleItemsImpurePipe,
    FetchJsonPipe,
    ExponentialPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
