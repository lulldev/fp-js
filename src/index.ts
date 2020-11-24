import {runExample} from './helpers/run-example';

// examples
import { simpleTuple, typedTuple, safeTuple } from './tuple-structures/tuple';
import { pair } from './tuple-structures/pair';
import { getUserFromApi } from './tuple-structures/error-handling';
import { findStudent } from './fabric-method/with-carry';

runExample(() => simpleTuple, 'simple tuple');
runExample(() => typedTuple, 'typed tuple');
runExample(() => safeTuple, 'safe tuple');
runExample(() => pair, 'pair');

runExample(() => getUserFromApi(), 'try to get user (can return error by Pair structure)');

runExample(() => findStudent('222-44-4444'), 'fabric method');
