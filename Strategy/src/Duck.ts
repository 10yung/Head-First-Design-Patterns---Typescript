import { FlyBehavior } from './FlyBehavior';
import { QuackBehavior } from './QuackBehavior';

export abstract class Duck {
  private _FlyBehavior: FlyBehavior;
  private _QuackBehavior: QuackBehavior;

  abstract display(): void;

  public performFly(): void {
    this._FlyBehavior.fly();
  }

  public performQuack(): void {
    this._QuackBehavior.quack();
  }

  public swin(): void {
    console.log('All ducks floats, evey decoys!');
  }

  // here use set keyword to set private variable
  set QuackBehavior(method: QuackBehavior) {
    this._QuackBehavior = method;
  }

  set FlyBehavior(method: FlyBehavior) {
      this._FlyBehavior = method;
  }

}