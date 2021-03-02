import R from 'ramda';
import _ from 'lodash';
import { Wrapper } from './wrapper-monad';
import { db, Student, IDatabase } from '../fabric-method/with-carry';

describe('Monads: Wrapper', () => {
  it('Should apply functions to monad value', () => {
    expect(Wrapper.of('Hello monads').map(R.toUpper).map(R.identity).toString()).toEqual(
      'Wrapper: HELLO MONADS',
    );
  });

  it('Should join() merge structure', () => {
    const findStudentBySsn = R.curry((db: IDatabase<Student>, ssn: string) => {
      return Wrapper.of(_.find(db.records, { ssn }));
    });

    const getAddress = (student: any) => {
      return Wrapper.of(student.map(R.prop('address')));
    };

    const studentAddress: { (ssn: string): Wrapper } = R.compose(
      getAddress,
      findStudentBySsn(db),
    );

    expect(studentAddress('444-44-4444').join().get()).toEqual('Moscow');
  });
});
