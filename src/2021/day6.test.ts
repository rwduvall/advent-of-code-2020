import { afterDays, useObj, cycle, d } from "./day6";

describe("day 6", () => {
  test("", () => {
    expect(afterDays(1, exampleInput)).toEqual([2, 3, 2, 0, 1]);
    expect(afterDays(2, exampleInput)).toEqual([1, 2, 1, 6, 0, 8]);
    expect(afterDays(3, exampleInput)).toEqual([0, 1, 0, 5, 6, 7, 8]);
    expect(afterDays(18, exampleInput)).toEqual([
      6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 8,
      8
    ]);
  });
  test("Number of fish", () => {
    expect(afterDays(18, exampleInput).length).toEqual(26);
    expect(afterDays(80, exampleInput).length).toEqual(5934);
    // expect(afterDays(256, exampleInput).length).toEqual(26984457539);
  });
  test("", () => {
    expect(afterDays(80, puzzleInput).length).toEqual(389726);
  });
  test("take 2", () => {
    const parsed = useObj(exampleInput);
    expect(d(18, parsed)).toEqual(26);
    expect(d(80, parsed)).toEqual(5934);
    const puzzleInp = useObj(puzzleInput);
    expect(d(80, puzzleInp)).toEqual(389726);
    expect(d(256, puzzleInp)).toEqual(389726);
  });
});
const exampleInput = [3, 4, 3, 1, 2];

const puzzleInput = [
  1, 1, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 4, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 5, 1, 1, 1, 1, 3, 1, 1, 2, 1, 2, 1, 3, 3, 4, 1, 4, 1, 1, 3, 1, 1, 5,
  1, 1, 1, 1, 4, 1, 1, 5, 1, 1, 1, 4, 1, 5, 1, 1, 1, 3, 1, 1, 5, 3, 1, 1, 1, 1,
  1, 4, 1, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 4, 1, 2, 2, 1, 1, 1, 3, 1, 2, 5, 1, 4,
  1, 1, 1, 3, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 2,
  1, 1, 5, 1, 1, 1, 4, 1, 1, 5, 1, 1, 5, 3, 3, 5, 3, 1, 1, 1, 4, 1, 1, 1, 1, 1,
  1, 5, 3, 1, 2, 1, 1, 1, 4, 1, 3, 1, 5, 1, 1, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1,
  1, 2, 1, 1, 1, 1, 4, 3, 2, 1, 2, 4, 1, 3, 1, 5, 1, 2, 1, 4, 1, 1, 1, 1, 1, 3,
  1, 4, 1, 1, 1, 1, 3, 1, 3, 3, 1, 4, 3, 4, 1, 1, 1, 1, 5, 1, 3, 3, 2, 5, 3, 1,
  1, 3, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 3, 1, 5, 1, 1, 1, 4, 4, 1, 1, 5, 5, 2,
  4, 5, 1, 1, 1, 1, 5, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
  1, 5, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 1, 1
];
