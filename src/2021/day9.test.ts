import { parse, compareAdjPoints } from './day9';

describe('day 9', () => {
  test('part 1', () => {
    const parsed = parse(puzzleInput);
    const output = compareAdjPoints(parsed);
    expect(output).toEqual(577);
  });
  test('part 1 Example', () => {
    const parsed = parse(example);
    const output = compareAdjPoints(parsed);
    expect(output).toEqual(15);
  });
});

const example = `2199943210
3987894921
9856789892
8767896789
0899965678`;
