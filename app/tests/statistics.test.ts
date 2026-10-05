import { summarize } from '../src/statistics';

test('summarizes the fixed example', () => {
  expect(summarize([2, 4, 6, 8])).toEqual({
    count: 4, sum: 20, mean: 5, min: 2, max: 8,
  });
});

test('handles negative and zero values', () => {
  expect(summarize([-4, 0, 4])).toEqual({
    count: 3, sum: 0, mean: 0, min: -4, max: 4,
  });
});

test('rejects an empty array', () => {
  expect(() => summarize([])).toThrow('Expected a non-empty array');
});

test('rejects non-finite values', () => {
  for (const invalid of [NaN, Infinity, -Infinity]) {
    expect(() => summarize([2, invalid])).toThrow('Expected only finite numbers');
  }
});

test('does not mutate the input array', () => {
  const numbers = Object.freeze([8, 2, 6, 4]);
  summarize(numbers);
  expect(numbers).toEqual([8, 2, 6, 4]);
});
