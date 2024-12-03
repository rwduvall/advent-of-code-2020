import { puzzleInput } from './puzzleInputs/day3';

const a = 'a';
const isUpper = (str: string) => {
  return str == str.toUpperCase();
};

export const getPriority = (item: string): number => {
  if (!isUpper(item)) {
    return item.charCodeAt(0) - 96;
  } else {
    return item.toLocaleLowerCase().charCodeAt(0) - 96 + 26;
  }
};

const splitAndConvert = (items: string) => {
  const half = items.length / 2;
  const firstHalf = items.slice(0, half);
  const firstHalfArr = [];

  const secondHalf = items.slice(half);
  const secondHalfArr = [];

  for (let index = 0; index < firstHalf.length; index++) {
    firstHalfArr.push(getPriority(firstHalf[index]));
    secondHalfArr.push(getPriority(secondHalf[index]));
  }

  return [firstHalfArr.sort((a, b) => a - b), secondHalfArr.sort((a, b) => a - b)];
};

export const findCommonNum = (packItemsByPriority: any[][][]) => {
  const answers = [];
  packItemsByPriority.forEach((pack) => {
    let found = -1;
    let index = 0;
    // Go through each item and try to find it in the other half
    while (found < 0) {
      found = pack[1].indexOf(pack[0][index]);
      index++;
    }
    answers.push(pack[0][index - 1]);
  });
  return answers.reduce((acc, curr) => acc + curr, 0);
};

export const parse = (puzzleInput: string) => {
  return puzzleInput.split(/\n/).map((packItems) => splitAndConvert(packItems));
};

const example = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

console.log(findCommonNum(parse(puzzleInput)));
