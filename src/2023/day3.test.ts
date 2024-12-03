import exp = require("constants");
import {
  convertInput,
  example,
  listOfSpecialCharacters,
  puzzleInput,
  searchAdjacent,
  part1,
  part2,
} from "./day3";

describe("day 3", () => {
  test("part 1", () => {
    const convertedInput = [
      ["4", "6", "7", ".", ".", "1", "1", "4", ".", "."],
      [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
      [".", ".", "3", "5", ".", ".", "6", "3", "3", "."],
      [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
      ["6", "1", "7", "*", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "+", ".", "5", "8", "."],
      [".", ".", "5", "9", "2", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "7", "5", "5", "."],
      [".", ".", ".", "$", ".", "*", ".", ".", ".", "."],
      [".", "6", "6", "4", ".", "5", "9", "8", ".", "."],
    ];
    expect(convertInput(example)).toEqual(convertedInput);
    expect(
      searchAdjacent(convertedInput, 0, 6, listOfSpecialCharacters)
    ).toBeFalsy();
    expect(
      searchAdjacent(convertedInput, 0, 3, listOfSpecialCharacters)
    ).toBeTruthy();

    expect(part1(example)).toEqual(4361);
    expect(part1(puzzleInput)).toEqual(517021);
  });

  test("part 2", () => {
    // expect(part2(example)).toEqual(1);
  });
});
