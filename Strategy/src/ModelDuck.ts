import { Duck } from './Duck'
import { Quack } from './Quack';
import { FlyNoWay } from './FlyNoWay'

export class ModelDuck extends Duck {
  QuackBehavior = new Quack();
  FlyBehavior = new FlyNoWay();

  display(): void {
    console.log('-ModelDuck-');
  }
}