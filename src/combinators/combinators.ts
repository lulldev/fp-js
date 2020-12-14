import * as R from 'ramda';

/**
 * I-combinator example
 * identity :: (a) -> a
 * @param param {string}
 * @returns input param
 */
export const identityParam = (param: string) => R.identity(param);

/**
 * K-combinator
 * Runs the given function with the supplied object, then returns the object.
 * Acts as a transducer if a transformer is given as second parameter.
 * tap :: (a -> *) -> a -> a
 */
const sayX = (x: number) => console.log('x is ' + x);
export const tapRun = (x: number) => R.tap(sayX, x);

/**
 * OR-combinator (alt or either)
 * TODO: NOT WORKING
 */
const sendCode = (code: string): boolean => code === '1234';
const fallbackNotification = (): boolean => {
  console.log('Failed sms sending');
  return false;
};
export const sendSmsCode = R.either(sendCode, fallbackNotification);

/**
 * S-combinator (seq)
 * TODO: 151-152 page.
 */

/*
  Condition mapping
*/
export const calculateFreeze = R.cond([
  [R.equals(0), R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T, (temp) => 'nothing special happens at ' + temp + '°C'],
]);

/*
  Fork-combinator (pipe)
*/
const fork = function (join: Function, func1: Function, func2: Function) {
  return function (val: any) {
    return join(func1(val), func2(val));
  };
};

const toLetterGrade = (grade: number) => {
  if (grade >= 90) return 'A';
  if (grade >= 80) return 'B';
  if (grade >= 70) return 'C';
  if (grade >= 60) return 'D';
  return 'F';
};

export const computeAverageGrade = R.compose(
  toLetterGrade,
  fork(R.divide, R.sum, R.length),
);
