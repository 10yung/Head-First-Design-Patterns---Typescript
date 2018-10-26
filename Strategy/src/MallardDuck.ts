import { Duck } from './Duck'
import { Quack } from './Quack';
import { FlyWithWings } from './FlyWithWings';

export class MallardDuck extends Duck {
  QuackBehavior = new Quack();
  FlyBehavior = new FlyWithWings();

  display(): void {
    console.log('-MallardDuck-');
  }

}
