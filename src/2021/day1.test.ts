import { occurancesOfIncrease, part2, exampleDay1, part2SumArray } from './day1';
import { day1Data } from './puzzleInputs/day1';

describe('day 1, part 1', () => {
  test('example', () => {
    expect(occurancesOfIncrease(exampleDay1)).toEqual(7);
  });
  test('input', () => {
    expect(occurancesOfIncrease(day1Data)).toEqual(1215);
  });
});

describe('day 1, part 2', () => {
  test('', () => {
    expect(part2SumArray(exampleDay1)).toEqual([607, 618, 618, 617, 647, 716, 769, 792]);
  });
  test('', () => {
    expect(part2SumArray(day1Data)).toEqual(outP2);
  });
  test('example ', () => {
    expect(part2(exampleDay1)).toEqual(5);
  });
  test('input ', () => {
    expect(part2(day1Data)).toEqual(1150);
  });
});
