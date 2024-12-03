import { readFileSync } from 'fs';

const puzzleInput = readFileSync('./puzzleInputs/day2.txt', 'utf-8');

function doesRowMatchCriteria(row: number[]): boolean {
  // The levels are either all increasing or all decreasing.
  // Any two adjacent levels differ by at least one and at most three.
  let rowIncreases = row[0] > row[1];
  let rowDecreases = row[0] < row[1];
  let greaterThanOne = true;
  let lessThanThree = true;
  for (let index = 0; index < row.length - 1; index++) {
    const currentItem = row[index];
    const nextItem = row[index + 1];
    if (rowIncreases) {
      if (currentItem < nextItem) {
        return false;
      }
    }

    if (rowDecreases) {
      let condition = currentItem > nextItem;
      if (condition) {
        return false;
      }
    }

    greaterThanOne = currentItem != nextItem; // currentItem + 1 < nextItem;
    lessThanThree = Math.abs(currentItem - nextItem) <= 3;

    if (!greaterThanOne || !lessThanThree) return false;
  }

  return true;
}

function numberOfPassingRows(str: string): number {
  const input = str.split('\n').map((r) => r.split(' ').map((n) => Number(n)));
  let answer = 0;
  input.forEach((row) => {
    if (doesRowMatchCriteria(row)) answer++;
  });
  console.log({ answer });
  return answer;
}

numberOfPassingRows(puzzleInput);
