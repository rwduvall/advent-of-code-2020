import { getPuzzleAnswer, puzzleInput } from "./day2Part1";
import { getPuzzleAnswerPart2, puzzleInputPart2 } from "./day2Part2";

describe("day 1", () => {
  test("part 1", () => {
    expect(getPuzzleAnswer(puzzleInput)).toEqual(10816);
  });

  test("part 2", () => {
    expect(getPuzzleAnswerPart2(puzzleInputPart2)).toEqual(11657);
  });
});
