import {
  numberOfPotentialsThatAreOverDistance,
  racePotentialRuns,
} from "./day6";

describe("day 6", () => {
  test("example", () => {
    expect(racePotentialRuns({ time: 7, distance: 9 })).toEqual([
      { time: 7, distance: 9, holdTime: 0, distanceTraveled: 0 },
      { time: 7, distance: 9, holdTime: 1, distanceTraveled: 6 },
      { time: 7, distance: 9, holdTime: 2, distanceTraveled: 10 },
      { time: 7, distance: 9, holdTime: 3, distanceTraveled: 12 },
      { time: 7, distance: 9, holdTime: 4, distanceTraveled: 12 },
      { time: 7, distance: 9, holdTime: 5, distanceTraveled: 10 },
      { time: 7, distance: 9, holdTime: 6, distanceTraveled: 6 },
      { time: 7, distance: 9, holdTime: 7, distanceTraveled: 0 },
    ]);
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 7, distance: 9 })
      )
    ).toEqual(4);
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 15, distance: 40 })
      )
    ).toEqual(8);
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 30, distance: 200 })
      )
    ).toEqual(9);

    // example
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 35, distance: 212 })
      )
    ).toEqual(20);
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 93, distance: 2060 })
      )
    ).toEqual(20);
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 73, distance: 1201 })
      )
    ).toEqual(22);
    expect(
      numberOfPotentialsThatAreOverDistance(
        racePotentialRuns({ time: 66, distance: 1044 })
      )
    ).toEqual(13);
  });
  test("part 2", () => {
    // expect(
    //   numberOfPotentialsThatAreOverDistance(
    //     racePotentialRuns({ time: 71530, distance: 940200 })
    //   )
    // ).toEqual(71503);
    // expect(
    //   numberOfPotentialsThatAreOverDistance(
    //     racePotentialRuns({ time: 35937366, distance: 212206012011044 })
    //   )
    // ).toEqual(21039729);
  });
});
