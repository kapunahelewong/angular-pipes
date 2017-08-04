"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_1 = require("./items");
var SaleItemsComponent = (function () {
    function SaleItemsComponent() {
        this.items = [];
        this.onSale = true;
        this.mutate = true;
        this.title = 'Sale Items (pure pipe)';
        this.reset();
    }
    SaleItemsComponent.prototype.addItem = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        var item = { name: name, onSale: this.onSale };
        if (this.mutate) {
            // Pure pipe won't update display because heroes array reference is unchanged
            // Impure pipe will display
            this.items.push(item);
        }
        else {
            // Pipe updates display because heroes array is a new object
            this.items = this.items.concat(item);
        }
    };
    SaleItemsComponent.prototype.reset = function () { this.items = items_1.ITEMS.slice(); };
    return SaleItemsComponent;
}());
SaleItemsComponent = __decorate([
    core_1.Component({
        selector: 'sale-items',
        templateUrl: './sale-items.component.html',
        styles: ['#flyers, #all {font-style: italic}']
    }),
    __metadata("design:paramtypes", [])
], SaleItemsComponent);
exports.SaleItemsComponent = SaleItemsComponent;
////// Identical except for impure pipe //////
var SaleItemsImpureComponent = (function (_super) {
    __extends(SaleItemsImpureComponent, _super);
    function SaleItemsImpureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'Sale Items (impure pipe)';
        return _this;
    }
    return SaleItemsImpureComponent;
}(SaleItemsComponent));
SaleItemsImpureComponent = __decorate([
    core_1.Component({
        selector: 'sale-items-impure',
        templateUrl: './sale-items-impure.component.html',
        styles: ['.flyers, .all {font-style: italic}'],
    })
], SaleItemsImpureComponent);
exports.SaleItemsImpureComponent = SaleItemsImpureComponent;
//# sourceMappingURL=sale-items.component.js.map