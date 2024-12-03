import { exampleInput, findSum, findSum2, part2Example } from './day1';
import { dayOne2024PuzzleInput as puzzleInput } from './puzzleinputs/day1';

describe('day 1', () => {
  test('part 1', () => {
    expect(findSum(exampleInput)).toEqual(142);
    expect(findSum(puzzleInput)).toEqual(56049);
  });

  test('part 2', () => {
    expect(findSum2(part2Example)).toEqual(281);
    expect(findSum2(puzzleInput)).toEqual(54530);
  });
});
