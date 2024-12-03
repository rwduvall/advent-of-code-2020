import { readFileSync } from 'fs';

const puzzleInput = readFileSync('./puzzleInputs/day3.txt', 'utf-8');

function doesRowMatchCriteria(row: number[]) {
  // The levels are either all increasing or all decreasing.
  // Any two adjacent levels differ by at least one and at most three.
  let rowIncreases = row[0] > row[1];
  let rowDecreases = row[0] < row[1];
  let greaterThanOne = true;
  let lessThanThree = true;
  let index = 0;
  const steps = [];
  const wrongIndex = [];
  do {
    const currentItem = row[index];
    const nextItem = row[index + 1];
    if (rowIncreases) {
      if (currentItem < nextItem) {
        // console.log('^');
        steps.push(false);
        wrongIndex.push(index);
      }
    }
    if (rowDecreases) {
      let condition = currentItem > nextItem;
      if (condition) {
        // console.log('down');
        steps.push(false);
        wrongIndex.push(index);
      }
    }
    // rowIncreases = currentItem < nextItem;
    // rowDecreases = currentItem > nextItem;
    greaterThanOne = currentItem != nextItem; // currentItem + 1 < nextItem;
    lessThanThree = Math.abs(currentItem - nextItem) <= 3;
    // console.log({ currentItem, nextItem, greaterThanOne, lessThanThree });
    steps.push(greaterThanOne && lessThanThree);
    wrongIndex.push(index);
    index++;
  } while (index < row.length - 1);
  const only1Wrong = steps.filter((v) => v === false).length === 1;
  if (only1Wrong) {
    if (steps[0] === false) {
      return true;
    }
    if (steps[steps.length - 1] === false) {
      return true;
    }
    //
    const copy = [...row];
    copy.splice(
      steps.findIndex((v) => v === false),
      1
    );
    // console.log({ copy, steps });
    if (doesRowMatchCriteria(copy)) {
      return true;
    }
    //

    // console.log({ row, steps });
    // how do I know which to remove if I'm here
  }
  if (steps.filter((v) => v === false).length === 0) return true;
  return false;
}

function numberOfPassingRows(str: string): number {
  const input = str.split('\n').map((r) => r.split(' ').map((n) => Number(n)));
  let answer = 0;
  input.forEach((row) => {
    const test = doesRowMatchCriteria(row);
    if (test) answer++;
  });
  console.log(answer);
  return answer;
}

const exampleday224 = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
  .split('\n')
  .map((r) => r.split(' ').map((n) => Number(n)));

numberOfPassingRows(``);
// exampleday224.forEach((row) => doesRowMatchCriteria(row));

// console.log(doesRowMatchCriteria([58, 59, 59, 60]));
