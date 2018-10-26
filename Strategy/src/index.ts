import { MallardDuck } from './MallardDuck'
import { ModelDuck } from './ModelDuck';
import { FlyRocketPowered } from './FlyRocketPowed';

let duck = new MallardDuck();
duck.display();
duck.performQuack();
duck.performFly();
duck.swin();

let modelDuck = new ModelDuck();
modelDuck.display();
modelDuck.performQuack();
modelDuck.performFly();
console.log('-dynamic set flybehavior-');
modelDuck.FlyBehavior = new FlyRocketPowered();
modelDuck.performFly();