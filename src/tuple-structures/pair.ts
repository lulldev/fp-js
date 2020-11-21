export interface Pair<T,U> extends ReadonlyArray<T|U> {
  0: T;
  1: U;
}

export interface MyPair extends Pair<string, number> {
  0: string;
  1: number;
}

export const pair: MyPair = <MyPair>Object.freeze(['foo', 123]);
