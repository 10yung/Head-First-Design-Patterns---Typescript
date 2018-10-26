"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = require("./MallardDuck");
var ModelDuck_1 = require("./ModelDuck");
var FlyRocketPowed_1 = require("./FlyRocketPowed");
var duck = new MallardDuck_1.MallardDuck();
duck.display();
duck.performQuack();
duck.performFly();
duck.swin();
var modelDuck = new ModelDuck_1.ModelDuck();
modelDuck.display();
modelDuck.performQuack();
modelDuck.performFly();
console.log('-dynamic set flybehavior-');
modelDuck.FlyBehavior = new FlyRocketPowed_1.FlyRocketPowered();
modelDuck.performFly();
