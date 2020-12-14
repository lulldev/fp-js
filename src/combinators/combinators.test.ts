import {
  identityParam,
  tapRun,
  sendSmsCode,
  calculateFreeze,
  computeAverageGrade,
} from './combinators';

describe('I-combinator', () => {
  it('Should return function param', () => {
    expect(identityParam('some')).toEqual('some');
  });
});

describe('K-combinator: tapRun', () => {
  it('Should log "x is 1000" and return 1000', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(tapRun(1000)).toEqual(1000);
    expect(consoleSpy).toHaveBeenCalledWith('x is 1000');
  });

  it('Should log "x is 5" and return 5', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(tapRun(5)).toEqual(5);
    expect(consoleSpy).toHaveBeenCalledWith('x is 5');
  });
});

describe('OR-combinator: sendSmsCode', () => {
  it('Should return true with valid code', () => {
    expect(sendSmsCode('1234')).toBeTruthy();
  });

  it('Should return false and call fallback function with invalid code', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(sendSmsCode('4321')).toBeFalsy();
    expect(consoleSpy).toHaveBeenCalledWith('Failed sms sending');
  });
});

describe('FORK-combinator: computeAverageGrade', () => {
  it('Should compute average grade and return "B"', () => {
    expect(computeAverageGrade([99, 80, 89])).toEqual('B');
  });
});

describe('Condition: calculateFreeze', () => {
  it('Should return string with 0 text', () => {
    expect(calculateFreeze(0)).toEqual('water freezes at 0°C');
  });

  it('Should return string with 100 text', () => {
    expect(calculateFreeze(100)).toEqual('water boils at 100°C');
  });

  it('Should return string with 50 text', () => {
    expect(calculateFreeze(50)).toEqual('nothing special happens at 50°C');
  });
});
