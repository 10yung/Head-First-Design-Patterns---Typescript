"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.performFly = function () {
        this._FlyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this._QuackBehavior.quack();
    };
    Duck.prototype.swin = function () {
        console.log('All ducks floats, evey decoys!');
    };
    Object.defineProperty(Duck.prototype, "QuackBehavior", {
        // here use set keyword to set private variable
        set: function (method) {
            this._QuackBehavior = method;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duck.prototype, "FlyBehavior", {
        set: function (method) {
            this._FlyBehavior = method;
        },
        enumerable: true,
        configurable: true
    });
    return Duck;
}());
exports.Duck = Duck;
