"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExponentCalculatorComponent = (function () {
    function ExponentCalculatorComponent() {
        this.num = 5;
        this.factor = 1;
    }
    return ExponentCalculatorComponent;
}());
ExponentCalculatorComponent = __decorate([
    core_1.Component({
        selector: 'exponent-calculator',
        template: "\n    <h2>Exponent Calculator</h2>\n    <div>Enter a number: <input [(ngModel)]=\"num\"></div>\n    <div>Exponent: <input [(ngModel)]=\"factor\"></div>\n    <p>\n      Answer: {{ num | exponential: factor }}\n    </p>\n  "
    })
], ExponentCalculatorComponent);
exports.ExponentCalculatorComponent = ExponentCalculatorComponent;
//# sourceMappingURL=power-boost-calculator.component.js.map