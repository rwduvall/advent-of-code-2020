import { dayOne, exampleDay1, day1Input } from "./day1";

describe("day 1", () => {
  test("part 1", () => {
    expect(dayOne(exampleDay1)[0]).toEqual(24000);
    expect(dayOne(day1Input)[0]).toEqual(70764);
  });

  test("part 2", () => {
    const sortedElfs = dayOne(day1Input);
    const elf1 = sortedElfs[0];
    const elf2 = sortedElfs[1];
    const elf3 = sortedElfs[2];
    expect(elf1 + elf2 + elf3).toEqual(203905);
  });
});
