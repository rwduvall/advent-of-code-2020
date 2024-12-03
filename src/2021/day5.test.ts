import { getLinePoints, items, parse, getLines } from './day5';

describe.skip('day 5', () => {
  test('', () => {
    const paresed = parse(input);
    expect(paresed).toEqual([
      [0, 9, 5, 9],
      [8, 0, 0, 8],
      [9, 4, 3, 4],
      [2, 2, 2, 1],
      [7, 0, 7, 4],
      [6, 4, 2, 0],
      [0, 9, 2, 9],
      [3, 4, 1, 4],
      [0, 0, 8, 8],
      [5, 5, 8, 2],
    ]);
  });
  test('', () => {
    expect(getLinePoints(1, 1, 1, 3)).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
    ]);
    expect(getLinePoints(9, 7, 7, 7)).toEqual([
      [9, 7],
      [8, 7],
      [7, 7],
    ]);
    expect(getLinePoints(0, 9, 5, 9)).toEqual([
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
    ]);
    expect(getLinePoints(8, 0, 0, 8)).toEqual([
      [8, 0],
      [7, 1],
      [6, 2],
      [5, 3],
      [4, 4],
      [3, 5],
      [2, 6],
      [1, 7],
      [0, 8],
    ]);
  });
  test('final solution', () => {
    const exampleInput = parse(input);
    expect(items(getLines(exampleInput).flat()).length).toEqual(12);
    //   const paresed = parse(puzzleInput);
    //   console.log(items(getLines(paresed).flat()).length);
  });
});

const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
