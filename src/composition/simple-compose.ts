import * as R from 'ramda';

export const explode = (str: string): string[] => str.split(/\s+/);

export const count = (arr: string[]): number => arr.length;

export const countWords = R.compose(count, explode);