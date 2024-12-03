import { findCommonNum, getPriority, parse } from './day3';
import { puzzleInput } from './puzzleInputs/day3';

describe('day 3', () => {
  test('getPriority', () => {
    expect(getPriority('a')).toEqual(1);
    expect(getPriority('z')).toEqual(26);
    expect(getPriority('A')).toEqual(27);
    expect(getPriority('Z')).toEqual(52);
  });

  test('part 2', () => {
    expect(findCommonNum(parse(puzzleInput))).toEqual(7908);
  });
});
