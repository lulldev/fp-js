import _ from 'lodash';

export const Sheduler = (() => {
  const delayedFn = _.bind(setTimeout, undefined, _, _);
  return {
    delay5: _.partial(delayedFn, _, 5000),
    delay10: _.partial(delayedFn, _, 5000),
    delay: _.partial(delayedFn, _, _)
  }
})();