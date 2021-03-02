import { findStudent } from './with-carry';

describe('Fabric method by carring: fabric method for findStudent', () => {
  it('Should activate products and return stringified output of products name', () => {
    expect(findStudent('222-44-4444')).toStrictEqual({
      ssn: '222-44-4444',
      fullname: 'Sidorov Mikhail',
      age: 18,
      address: 'Samara',
    });
  });
});
