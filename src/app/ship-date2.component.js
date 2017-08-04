"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemShipDate2Component = (function () {
    function ItemShipDate2Component() {
        this.shipdate2 = new Date(2018, 3, 15); // April 15, 2018
        this.toggle = true; // start with true == shortDate
    }
    Object.defineProperty(ItemShipDate2Component.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    ItemShipDate2Component.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
    return ItemShipDate2Component;
}());
ItemShipDate2Component = __decorate([
    core_1.Component({
        selector: 'item-shipdate2',
        template: "\n    <p>The item's ship date is {{ shipdate2 | date:format }}</p>\n    <button (click)=\"toggleFormat()\">Toggle Format</button>\n  "
    })
], ItemShipDate2Component);
exports.ItemShipDate2Component = ItemShipDate2Component;
//# sourceMappingURL=ship-date2.component.js.map