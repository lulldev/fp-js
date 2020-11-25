import _ from 'lodash';

declare global {
  interface String {
    explode(regExp?: RegExp): string[] | null;
  }
}

if (!String.prototype.explode) {
  String.prototype.explode = _.partial(String.prototype.match, /[\w]/gi);
}

declare global {
  interface Number {
    addPostfix(postfix: string): string | null;
  }
}

if (!Number.prototype.addPostfix) {
  Number.prototype.addPostfix = _.partial(String.prototype.concat, ` ${_}`);
}