import _ from 'lodash';

export function summarize(numbers: readonly number[]) {
  if (numbers.length === 0) {
    throw new Error('Expected a non-empty array');
  }
  if (!numbers.every(Number.isFinite)) {
    throw new Error('Expected only finite numbers');
  }

  return {
    count: numbers.length,
    sum: _.sum(numbers),
    mean: _.mean(numbers),
    min: _.min(numbers)!,
    max: _.max(numbers)!,
  };
}
