import exp = require('constants');
import { part1, part2, example, convertInput, numberOfWinningNumbersInCard, isCardWinner } from './day4';

describe('day 4', () => {
  test('convert input', () => {
    expect(convertInput('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53')).toEqual([
      {
        number: 1,
        right: [83, 86, 6, 31, 17, 9, 48, 53],
        left: [41, 48, 83, 86, 17],
      },
    ]);
    expect(
      convertInput('Card 199:  9 40 14 21 42 13 48 22 35 44 | 69 13  8 49 55 57 28 87 80 60 12  7 51 61  6 17 77 67 10 73 82 47 24 90  4')
    ).toEqual([
      {
        number: 199,
        right: [69, 13, 8, 49, 55, 57, 28, 87, 80, 60, 12, 7, 51, 61, 6, 17, 77, 67, 10, 73, 82, 47, 24, 90, 4],
        left: [9, 40, 14, 21, 42, 13, 48, 22, 35, 44],
      },
    ]);
  });
  test('points from each card', () => {
    expect(numberOfWinningNumbersInCard(convertInput('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53')[0])).toEqual(8);
    expect(numberOfWinningNumbersInCard(convertInput('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19')[0])).toEqual(2);
    expect(numberOfWinningNumbersInCard(convertInput('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83')[0])).toEqual(1);
    expect(numberOfWinningNumbersInCard(convertInput('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36')[0])).toEqual(0);
  });
  //   test("is card winner", () => {
  //     expect(
  //       isCardWinner({
  //         number: 1,
  //         left: [41, 48, 83, 86, 17],
  //         right: [83, 86, 6, 31, 17, 9, 48, 53],
  //       })
  //     ).toEqual({
  //       card: {
  //         number: 1,
  //         copies: 1,
  //         left: [41, 48, 83, 86, 17],
  //         right: [83, 86, 6, 31, 17, 9, 48, 53],
  //       },
  //       points: 4,
  //     });

  //     expect(
  //       isCardWinner({
  //         number: 2,
  //         left: [13, 32, 20, 16, 61],
  //         right: [61, 30, 68, 82, 17, 32, 24, 19],
  //       })
  //     ).toEqual({
  //       card: {
  //         number: 2,
  //         left: [13, 32, 20, 16, 61],
  //         right: [61, 30, 68, 82, 17, 32, 24, 19],
  //       },
  //       points: 2,
  //     });
  //     expect(
  //       isCardWinner({
  //         number: 3,
  //         left: [1, 21, 53, 59, 44],
  //         right: [69, 82, 63, 72, 16, 21, 14, 1],
  //       })
  //     ).toEqual({
  //       card: {
  //         number: 3,
  //         left: [1, 21, 53, 59, 44],
  //         right: [69, 82, 63, 72, 16, 21, 14, 1],
  //         copies: 1,
  //       },
  //       points: 2,
  //     });
  //   });

  test('part 1', () => {
    // expect(part1(example)).toEqual(13);
    // expect(part1(puzzleInput)).toEqual(24733);
  });

  test('part 2', () => {
    expect(part2(example)).toEqual(30);
    // expect(part2(puzzleInput)).toEqual(30);
  });
});
