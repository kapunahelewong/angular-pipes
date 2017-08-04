"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemShipDateComponent = (function () {
    function ItemShipDateComponent() {
        this.shipdate = new Date(2018, 3, 15); // April 15, 2018
    }
    return ItemShipDateComponent;
}());
ItemShipDateComponent = __decorate([
    core_1.Component({
        selector: 'item-shipdate',
        template: "<p>The item's ship date is {{ shipdate | date }}</p>"
    })
], ItemShipDateComponent);
exports.ItemShipDateComponent = ItemShipDateComponent;
//# sourceMappingURL=hero-birthday1.component.js.map