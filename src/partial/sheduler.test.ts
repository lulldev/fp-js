import { Sheduler } from './scheduler';

jest.useFakeTimers();

describe('Partial: simple timeout scheduler', () => {
  it('Should run sheduler after 5 seconds and write log after execute', () => {
    // TODO:
    // Sheduler.delay5(() => console.log('sheduler after 5 second'));
    // setTimeout(() => {
    //   const consoleSpy = jest.spyOn(console, 'log');
    //   expect(consoleSpy).toHaveBeenCalledWith('sheduler after 5 second');
    // }, 6000);
    // jest.runAllTimers();
  });
});
