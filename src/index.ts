import {runExample} from './helpers/run-example';

// examples
import { simpleTuple, typedTuple, safeTuple } from './tuple-structures/tuple';
import { pair } from './tuple-structures/pair';
import { getUserFromApi } from './tuple-structures/error-handling';
import { findStudent } from './fabric-method/with-carry';
import './partial/extend-standart-functions';
import { Sheduler } from './partial/scheduler';
import { countWords } from './composition/simple-compose';
import { processProducts } from './composition/simple-pipe';
import { identityParam, tapRun, calculateFreeze } from './combinators/combinators';

runExample(() => simpleTuple, 'simple tuple');
runExample(() => typedTuple, 'typed tuple');
runExample(() => safeTuple, 'safe tuple');
runExample(() => pair, 'pair');

runExample(() => getUserFromApi(), 'try to get user (can return error by Pair structure)');

runExample(() => findStudent('222-44-4444'), 'fabric method');

runExample(() => 'ABC'.explode(), 'Partial for extending standart js lib');
runExample(() => Number(4).addPostfix('руб.'), 'Partial for extending standart js lib');

runExample(() => Sheduler.delay5(() => console.log('sheduler after 5 second')), 'Partial for extending standart js lib');

runExample(() => countWords('hello user'), 'Simple composition with compose');

runExample(() => processProducts([
  { name: 'Apple', active: false},
  { name: 'Milk', active: false}
]), 'Simple pipe');

// combinators
runExample(() => identityParam('123'), 'I-combinator (identity)');
runExample(() => tapRun(1000), 'K-combinator (tap)');
// runExample(() => sendSmsCode(), 'OR-combinator (alt)');
// runExample(() => R.pipe(
//   calculateFreeze(0),
//   () => calculateFreeze(100),
//   () => calculateFreeze(50)),
// , 'Condition combinator (by ramda cond)');