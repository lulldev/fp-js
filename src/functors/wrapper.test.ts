import R from 'ramda';
import _ from 'lodash';
import { wrap, Wrapper } from './wrapper';

const consoleSpy = jest.spyOn(console, 'log');

const plus = R.curry((a: number, b: number) => a + b);
const plus3 = plus(3);
const plus10 = plus(10);

const two = wrap(2);
const five = two.fmap(plus3);

describe('Functor: Wrapper & wrap', () => {
  it('Should return pure value from wrapper', () => {
    const wrappedValue = wrap('Hello world!');
    expect(wrappedValue.map(R.identity)).toEqual('Hello world!');
  });

  it('Should format value and return it', () => {
    const wrappedValue = wrap('Hello world!');
    expect(wrappedValue.map(R.toUpper)).toEqual('HELLO WORLD!');
  });

  it('Should apply functions via fmap', () => {
    expect(five.map(R.identity)).toEqual(5);
    expect(two.fmap(plus3).fmap(plus10).map(R.identity)).toEqual(15);

    two.fmap(plus3).fmap(R.tap(console.log));
    expect(consoleSpy).toHaveBeenCalledWith(5);
  });

  it('Should apply simple logger via fmap', () => {
    consoleSpy.mockClear();
    const logger = (log: string) => console.log(`Logger: ${log}`);

    two.fmap(plus3).fmap(R.tap(logger));
    expect(consoleSpy).toHaveBeenCalledWith('Logger: 5');
  });
});
