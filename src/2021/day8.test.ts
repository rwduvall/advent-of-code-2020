import { day8Part1, day8Part2, sum } from './day8';
import { puzzleInput, simpleExample } from './puzzleInputs/day8';

describe('day 8', () => {
  test('part 1', () => {
    expect(day8Part1(puzzleInput)).toEqual(342);
  });
  test('part 2', () => {
    expect(sum(day8Part2(puzzleInput))).toEqual(1068933);
    // console.log(day8Part2(exampleInput));
    console.log(sum(day8Part2(puzzleInput)));
    // expect(day8Part2(simpleExample)).toEqual(342);
  });
});
