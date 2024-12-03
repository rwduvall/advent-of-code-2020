import { puzzleInputDayOne2024 } from './puzzleInputs/day1';

const left = puzzleInputDayOne2024.replaceAll(/   \d+/g, '');
const right = puzzleInputDayOne2024.replaceAll(/\d+   /g, '');

// const left = `3
// 4
// 2
// 1
// 3
// 3`;
// const right = `4
// 3
// 5
// 3
// 9
// 3`;

const rightArray = right
  .split('\n')
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const leftArray = left
  .split('\n')
  .map((v) => Number(v))
  .sort((a, b) => a - b);

const part1Answer = rightArray
  .map((val, index) => {
    const a = val - leftArray[index];
    return Math.abs(a);
  })
  .reduce((pre, curr) => pre + curr, 0);
console.log('part 1: ', part1Answer);

// ___________Part 2___________

const counts = [];
const part2Answer = leftArray.forEach((value, index, arr) => {
  const matches = rightArray.filter((rVal) => rVal === value);
  counts.push(value * matches.length);
});
console.log(
  'part 2: ',
  counts.reduce((pre, curr) => pre + curr, 0)
);
