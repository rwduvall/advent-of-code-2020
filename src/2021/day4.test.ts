import { markNumberAsCalled, turnInputIntoObj, isBoardWinning, findWinningBoard, finalAnswer } from './day4';

describe('day 4', () => {
  test('markNumberAsCalled', () => {
    expect(
      markNumberAsCalled(3, {
        row1: {
          num1: { num: 1, called: false },
          num2: { num: 2, called: false },
          num3: { num: 3, called: false },
          num4: { num: 4, called: false },
          num5: { num: 5, called: false },
        },
        row2: {
          num1: { num: 21, called: false },
          num2: { num: 22, called: false },
          num3: { num: 23, called: false },
          num4: { num: 24, called: false },
          num5: { num: 25, called: false },
        },
        row3: {
          num1: { num: 31, called: false },
          num2: { num: 32, called: false },
          num3: { num: 33, called: false },
          num4: { num: 34, called: false },
          num5: { num: 35, called: false },
        },
        row4: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false },
        },
        row5: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false },
        },
      })
    ).toEqual({
      row1: {
        num1: { num: 1, called: false },
        num2: { num: 2, called: false },
        num3: { num: 3, called: true },
        num4: { num: 4, called: false },
        num5: { num: 5, called: false },
      },
      row2: {
        num1: { num: 21, called: false },
        num2: { num: 22, called: false },
        num3: { num: 23, called: false },
        num4: { num: 24, called: false },
        num5: { num: 25, called: false },
      },
      row3: {
        num1: { num: 31, called: false },
        num2: { num: 32, called: false },
        num3: { num: 33, called: false },
        num4: { num: 34, called: false },
        num5: { num: 35, called: false },
      },
      row4: {
        num1: { num: 41, called: false },
        num2: { num: 42, called: false },
        num3: { num: 43, called: false },
        num4: { num: 44, called: false },
        num5: { num: 45, called: false },
      },
      row5: {
        num1: { num: 41, called: false },
        num2: { num: 42, called: false },
        num3: { num: 43, called: false },
        num4: { num: 44, called: false },
        num5: { num: 45, called: false },
      },
    });
    expect(
      markNumberAsCalled(23, {
        row1: {
          num1: { num: 1, called: false },
          num2: { num: 2, called: false },
          num3: { num: 3, called: false },
          num4: { num: 4, called: false },
          num5: { num: 5, called: false },
        },
        row2: {
          num1: { num: 21, called: false },
          num2: { num: 22, called: false },
          num3: { num: 23, called: false },
          num4: { num: 24, called: false },
          num5: { num: 25, called: false },
        },
        row3: {
          num1: { num: 31, called: false },
          num2: { num: 32, called: false },
          num3: { num: 33, called: false },
          num4: { num: 34, called: false },
          num5: { num: 35, called: false },
        },
        row4: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false },
        },
        row5: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false },
        },
      }).row2.num3.called
    ).toEqual(true);
  });
  test('', () => {
    expect(turnInputIntoObj(boards)[2]).toEqual({
      row1: {
        num1: { num: 14, called: false },
        num2: { num: 21, called: false },
        num3: { num: 17, called: false },
        num4: { num: 24, called: false },
        num5: { num: 4, called: false },
      },
      row2: {
        num1: { num: 10, called: false },
        num2: { num: 16, called: false },
        num3: { num: 15, called: false },
        num4: { num: 9, called: false },
        num5: { num: 19, called: false },
      },
      row3: {
        num1: { num: 18, called: false },
        num2: { num: 8, called: false },
        num3: { num: 23, called: false },
        num4: { num: 26, called: false },
        num5: { num: 20, called: false },
      },
      row4: {
        num1: { num: 22, called: false },
        num2: { num: 11, called: false },
        num3: { num: 13, called: false },
        num4: { num: 6, called: false },
        num5: { num: 5, called: false },
      },
      row5: {
        num1: { num: 2, called: false },
        num2: { num: 0, called: false },
        num3: { num: 12, called: false },
        num4: { num: 3, called: false },
        num5: { num: 7, called: false },
      },
    });
  });
  test('findWinningBoard', () => {
    expect(
      isBoardWinning({
        row1: {
          num1: { num: 14, called: false },
          num2: { num: 21, called: false },
          num3: { num: 17, called: false },
          num4: { num: 24, called: false },
          num5: { num: 4, called: false },
        },
        row2: {
          num1: { num: 10, called: true },
          num2: { num: 16, called: true },
          num3: { num: 15, called: true },
          num4: { num: 9, called: true },
          num5: { num: 19, called: true },
        },
        row3: {
          num1: { num: 18, called: false },
          num2: { num: 8, called: false },
          num3: { num: 23, called: false },
          num4: { num: 26, called: false },
          num5: { num: 20, called: false },
        },
        row4: {
          num1: { num: 22, called: false },
          num2: { num: 11, called: false },
          num3: { num: 13, called: false },
          num4: { num: 6, called: false },
          num5: { num: 5, called: false },
        },
        row5: {
          num1: { num: 2, called: false },
          num2: { num: 0, called: false },
          num3: { num: 12, called: false },
          num4: { num: 3, called: false },
          num5: { num: 7, called: false },
        },
      })
    ).toEqual(true);
    expect(
      isBoardWinning({
        row1: {
          num1: { num: 14, called: false },
          num2: { num: 21, called: false },
          num3: { num: 17, called: false },
          num4: { num: 24, called: false },
          num5: { num: 4, called: false },
        },
        row2: {
          num1: { num: 10, called: false },
          num2: { num: 16, called: false },
          num3: { num: 15, called: false },
          num4: { num: 9, called: false },
          num5: { num: 19, called: false },
        },
        row3: {
          num1: { num: 18, called: false },
          num2: { num: 8, called: false },
          num3: { num: 23, called: false },
          num4: { num: 26, called: false },
          num5: { num: 20, called: false },
        },
        row4: {
          num1: { num: 22, called: false },
          num2: { num: 11, called: false },
          num3: { num: 13, called: false },
          num4: { num: 6, called: false },
          num5: { num: 5, called: false },
        },
        row5: {
          num1: { num: 2, called: false },
          num2: { num: 0, called: false },
          num3: { num: 12, called: false },
          num4: { num: 3, called: false },
          num5: { num: 7, called: false },
        },
      })
    ).toEqual(false);
    expect(
      isBoardWinning({
        row1: {
          num1: { num: 14, called: false },
          num2: { num: 21, called: false },
          num3: { num: 17, called: false },
          num4: { num: 24, called: true },
          num5: { num: 4, called: false },
        },
        row2: {
          num1: { num: 10, called: false },
          num2: { num: 16, called: false },
          num3: { num: 15, called: false },
          num4: { num: 9, called: true },
          num5: { num: 19, called: false },
        },
        row3: {
          num1: { num: 18, called: false },
          num2: { num: 8, called: false },
          num3: { num: 23, called: false },
          num4: { num: 26, called: true },
          num5: { num: 20, called: false },
        },
        row4: {
          num1: { num: 22, called: false },
          num2: { num: 11, called: false },
          num3: { num: 13, called: false },
          num4: { num: 6, called: true },
          num5: { num: 5, called: false },
        },
        row5: {
          num1: { num: 2, called: false },
          num2: { num: 0, called: false },
          num3: { num: 12, called: false },
          num4: { num: 3, called: true },
          num5: { num: 7, called: false },
        },
      })
    ).toEqual(true);
  });
  test('part 2 final', () => {
    expect(findWinningBoard(numbers, turnInputIntoObj(boards)).board).toEqual({
      row1: {
        num1: { num: 3, called: false },
        num2: { num: 15, called: false },
        num3: { num: 0, called: true },
        num4: { num: 2, called: true },
        num5: { num: 22, called: false },
      },
      row2: {
        num1: { num: 9, called: true },
        num2: { num: 18, called: false },
        num3: { num: 13, called: true },
        num4: { num: 17, called: true },
        num5: { num: 5, called: true },
      },
      row3: {
        num1: { num: 19, called: false },
        num2: { num: 8, called: false },
        num3: { num: 7, called: true },
        num4: { num: 25, called: false },
        num5: { num: 23, called: true },
      },
      row4: {
        num1: { num: 20, called: false },
        num2: { num: 11, called: true },
        num3: { num: 10, called: true },
        num4: { num: 24, called: true },
        num5: { num: 4, called: true },
      },
      row5: {
        num1: { num: 14, called: true },
        num2: { num: 21, called: true },
        num3: { num: 16, called: true },
        num4: { num: 12, called: false },
        num5: { num: 6, called: false },
      },
    });
  });
  test('sum', () => {
    const answer = findWinningBoard(numbers, turnInputIntoObj(boards));
    expect(finalAnswer(answer.board, answer.lastnum)).toEqual(1924);
  });
});

const numbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];

const boards = `22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const numInput = [
  0, 56, 39, 4, 52, 7, 73, 57, 65, 13, 3, 72, 69, 96, 18, 9, 49, 83, 24, 31, 12, 64, 29, 21, 80, 71, 66, 95, 2, 62, 68, 46, 11, 33, 74, 88, 17, 15, 5,
  6, 98, 30, 51, 78, 76, 75, 28, 53, 87, 48, 20, 22, 55, 86, 82, 90, 47, 19, 25, 1, 27, 60, 94, 38, 97, 58, 70, 10, 43, 40, 89, 26, 34, 32, 23, 45,
  50, 91, 61, 44, 35, 85, 63, 16, 99, 92, 8, 36, 81, 84, 79, 37, 93, 67, 59, 54, 41, 77, 42, 14,
];
