"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var sale_items_component_1 = require("./sale-items.component");
var item_async_message_component_1 = require("./item-async-message.component");
var ship_date1_component_1 = require("./ship-date1.component");
var ship_date2_component_1 = require("./ship-date2.component");
var item_list_component_1 = require("./item-list.component");
var exponential_component_1 = require("./exponential.component");
var exponent_calculator_component_1 = require("./exponent-calculator.component");
var sale_items_pipe_1 = require("./sale-items.pipe");
var fetch_json_pipe_1 = require("./fetch-json.pipe");
var exponential_pipe_1 = require("./exponential.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            sale_items_component_1.SaleItemsComponent,
            sale_items_component_1.SaleItemsImpureComponent,
            item_async_message_component_1.ItemAsyncMessageComponent,
            ship_date1_component_1.ItemShipDateComponent,
            ship_date2_component_1.ItemShipDate2Component,
            item_list_component_1.ItemListComponent,
            exponential_component_1.ExponentialComponent,
            exponent_calculator_component_1.ExponentCalculatorComponent,
            sale_items_pipe_1.SaleItemsPipe,
            sale_items_pipe_1.SaleItemsImpurePipe,
            fetch_json_pipe_1.FetchJsonPipe,
            exponential_pipe_1.ExponentialPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map