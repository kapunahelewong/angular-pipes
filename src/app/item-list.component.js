"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemListComponent = (function () {
    function ItemListComponent() {
    }
    return ItemListComponent;
}());
ItemListComponent = __decorate([
    core_1.Component({
        selector: 'item-list',
        template: "\n    <h2>Items from JSON File</h2>\n\n    <div *ngFor=\"let item of ('items.json' | fetch) \">\n      {{item.name}}\n    </div>\n\n    <p>Items as JSON:\n      {{'items.json' | fetch | json}}\n    </p>"
    })
], ItemListComponent);
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map