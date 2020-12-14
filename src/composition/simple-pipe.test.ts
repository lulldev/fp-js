import { processProducts } from './simple-pipe';

describe('Pipeline: processProducts', () => {
  it('Should activate products and return stringified output of products name', () => {
    expect(
      processProducts([
        { name: 'Apple', active: false },
        { name: 'Milk', active: false },
      ]),
    ).toEqual('Apple (active) | Milk (active)');
  });
});
