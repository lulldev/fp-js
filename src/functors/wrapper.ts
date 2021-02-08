import * as R from 'ramda';

export class Wrapper {
  private value: any;

  constructor(value: any) {
    this.value = value;
  }

  // map :: (A -> B) -> A -> B
  map(f: Function) {
    return f(this.value);
  }

  fmap(f: Function) {
    return new Wrapper(f(this.value));
  }

  toString() {
    return `Wrapper value: ${this.value}`;
  }
}

export const wrap = (val: any) => new Wrapper(val);
