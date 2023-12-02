import {
  exampleInput,
  findSum,
  findSum2,
  part2Example,
  part2PuzzleInput,
  puzzleInput,
} from "./day1";

describe("day 1", () => {
  test("part 1", () => {
    expect(findSum(exampleInput)).toEqual(142);
    expect(findSum(puzzleInput)).toEqual(56049);
  });

  test("part 2", () => {
    expect(findSum2(part2Example)).toEqual(281);
    expect(findSum2(part2PuzzleInput)).toEqual(54530);
  });
});
