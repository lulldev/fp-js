export const simpleTuple: [string, number] = ['some value', 123];

export interface Tuple<T,U> extends Array<T|U> {
  0: T;
  1: U;
}

export const typedTuple: Tuple<boolean, number> = [true, 123];

export interface SafeTuple extends ReadonlyArray<string|number> {
  0: string;
  1: number;
  length: 2;
}

export const safeTuple: SafeTuple = <SafeTuple>Object.freeze(['foo', 123]);
