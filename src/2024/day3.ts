import { readFileSync } from 'fs';
const day3Example = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
const file = readFileSync('./puzzleInputs/day3.txt', 'utf-8');

function multiple(num1: number, num2: number): number {
  // using else if when processing instructions for part 2 so this isn't required but is still a bit safer
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return 0;
  }
  return num1 * num2;
}

/// part 1
function findMul(corruptedMem: string) {
  const matches = corruptedMem.matchAll(/mul\(\d+,\d+\)/g);
  return matches;
}

function findAnswerPart1(curruptedMemory: string) {
  const matches = findMul(curruptedMemory);
  let answer = 0;
  for (const match of matches) {
    const nums = match[0].replaceAll(/mul|\(|\)/g, '').split(',');
    answer += multiple(Number(nums[0]), Number(nums[1]));
  }
  return answer;
}

console.log(findAnswerPart1(file));

/// part 2
function findMulAndInstructions(corruptedMem: string) {
  const matches = corruptedMem.matchAll(/(mul\(\d+,\d+\))|do\(\)|don't\(\)/g);
  return matches;
}

function findAnswerPart2(curruptedMemory: string) {
  const matches = findMulAndInstructions(curruptedMemory);
  let answer = 0;
  let enabled = true;
  for (const match of matches) {
    if (match[0] === 'do()') {
      enabled = true;
    } else if (match[0] === `don't()`) {
      enabled = false;
    } else if (enabled) {
      const nums = match[0].replaceAll(/mul|\(|\)/g, '').split(',');
      answer += multiple(Number(nums[0]), Number(nums[1]));
    }
  }
  console.log(answer);
  return answer;
}

console.log(findAnswerPart2(file));
