"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var Quack_1 = require("./Quack");
var FlyNoWay_1 = require("./FlyNoWay");
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.QuackBehavior = new Quack_1.Quack();
        _this.FlyBehavior = new FlyNoWay_1.FlyNoWay();
        return _this;
    }
    ModelDuck.prototype.display = function () {
        console.log('-ModelDuck-');
    };
    return ModelDuck;
}(Duck_1.Duck));
exports.ModelDuck = ModelDuck;
