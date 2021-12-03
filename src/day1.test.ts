import { part1 } from "./day1";

export const exampleDay1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("day 1, part 1", () => {
  test("example", () => {
    expect(part1(exampleDay1)).toEqual(7);
  });
});
