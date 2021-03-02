import * as R from 'ramda';

export class Wrapper {
  private value: any;

  constructor(value: any) {
    this.value = value;
  }

  // единичная функция
  static of(a: any) {
    return new Wrapper(a);
  }

  // функция связываня (функтор)
  map(f: Function) {
    return Wrapper.of(f(this.value));
  }

  join(): any {
    if (!(this.value instanceof Wrapper)) {
      return this;
    }
    return this.value.join();
  }

  get(): any {
    return this.value;
  }

  toString() {
    return `Wrapper: ${this.value}`;
  }
}

export const wrap = (val: any) => new Wrapper(val);
