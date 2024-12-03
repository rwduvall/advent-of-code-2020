import { stringSplitOnNewLineAndbyChar } from './genericParser';
import { convertStartTo0, doTheMath } from './day15';
import { puzzleInput } from './puzzleInputs/day15';

describe('day 15', () => {
  const example = `0163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

  const simpleInput = `1163
1381
2136
3694`;

  const afterSimple: number[][] = [
    [1, 2, 8, 11],
    [2, 5, 13, 12],
    [4, 5, 8, 14],
    [7, 11, 17, 18],
  ];

  const pathThatGoesUp = `99999
19111
11191
99991
99991`;

  const expectedResultUpPath = [
    [0, 9, 18, 27, 36],
    [1, 10, 5, 6, 7],
    [2, 3, 4, 13, 8],
    [11, 12, 13, 18, 9],
    [20, 21, 22, 27, 10],
  ];

  const parsedExampleInput = stringSplitOnNewLineAndbyChar(example);
  // const parsedSimpleInput = stringSplitOnNewLineAndbyChar(simpleInput);
  const parsedPuzzleIput = stringSplitOnNewLineAndbyChar(puzzleInput);
  const parsedVSimple = stringSplitOnNewLineAndbyChar(pathThatGoesUp);

  test.only('Part 1', () => {
    const examplePuzzle = doTheMath(parsedVSimple);
    expect(examplePuzzle).toEqual(10);
  });

  test('Part 1', () => {
    const examplePuzzle = doTheMath(parsedExampleInput);
    expect(examplePuzzle).toEqual(40);
  });
});
