import * as R from 'ramda';
import _ from 'lodash';

interface Student {
  ssn: string;
  fullname: string;
  age: number;
}

interface IDatabase<T> {
  records: T[];
}

abstract class Database<T> implements IDatabase<T> {
  records: T[];

  constructor(records: T[]) {
    this.records = records;
  }
}

class StudentDatabase extends Database<Student> {
  constructor() {
    super([
      { ssn: '444-44-4444', fullname: 'Ivanov Ivan', age: 20 },
      { ssn: '222-44-4444', fullname: 'Sidorov Mikhail', age: 18 },
    ]);
  }
}

// data objects
const db = new StudentDatabase();

const studentsArr: Student[] = [
  { ssn: '444-44-4444', fullname: 'Ivanov Ivan', age: 20 },
  { ssn: '222-44-4444', fullname: 'Sidorov Mikhail', age: 18 },
];

const find = (db: IDatabase<Student>, fieldName: string) =>
  _.find(db.records, { fieldName });

// fetchStudentsFromDb :: DB - (String -> Student)
export const fetchStudentsFromDb = R.curry((db: IDatabase<Student>, ssn: string) =>
  find(db, ssn),
);

// fetchStudentsFromDb :: DB - (String -> Student)
export const fetchStudentsFromArray = R.curry((arr: Student[], ssn: string) =>
  _.find(arr, { ssn }),
);

// false: some config value
export const findStudent = false
  ? fetchStudentsFromDb(db)
  : fetchStudentsFromArray(studentsArr);
