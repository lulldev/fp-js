import { countWords } from './simple-compose';

describe('Composition: countWords', () => {
  it('Should return words count of sentences', () => {
    expect(countWords('hello user')).toEqual(2);
  });
});
