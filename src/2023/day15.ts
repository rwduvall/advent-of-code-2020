import { day15Example as puzzleInput } from './puzzleinputs/day15.input';

function runHash(input: string, currentValue: number): number {
  currentValue += input.charCodeAt(0);
  currentValue *= 17;
  currentValue = currentValue % 256;
  return currentValue;
}

function runHashOnFullString(str: string) {
  let box = 0;
  for (let char of str) {
    const label = char.split(/[=-]/)[0];
    box = runHash(label, box);
  }
  return box;
}

const arr = puzzleInput.split(',').map((code) => runHashOnFullString(code));
console.log(arr.reduce((prev, curr) => prev + curr, 0));

// console.log(runHashOnFullString('HASH'));
// console.log(runHashOnFullString('rn=1'));
