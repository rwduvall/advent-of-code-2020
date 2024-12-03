import { dayOne2024PuzzleInput as puzzleInput } from './puzzleinputs/day1';

// Part 1

const reverse = (str: string) => str.split('').reverse().join('');

export const exampleInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

export const findSum = (input: string): number => {
  const lines = input.split('\n');
  let result = 0;
  lines.forEach((line) => {
    // find the first number in the string
    const first = line.match(/\d/)[0];

    // reverse the line so that its easier to find the last digit
    var reversedLine = reverse(line);

    const last = reversedLine.match(/\d/).reverse()[0];
    const calibrationValue = first + last;
    result += parseInt(calibrationValue);
  });
  return result;
};

/* Part 2*/

export const part2Example = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

// return string so its easier to join the 2 numbers together before parsing to Int
export const convertStringToNumber = (string) => {
  if (string.match(/\d/)) {
    return string;
  } else if (string === 'one') {
    return '1';
  } else if (string === 'two') {
    return '2';
  } else if (string === 'three') {
    return '3';
  } else if (string === 'four') {
    return '4';
  } else if (string === 'five') {
    return '5';
  } else if (string === 'six') {
    return '6';
  } else if (string === 'seven') {
    return '7';
  } else if (string === 'eight') {
    return '8';
  } else if (string === 'nine') {
    return '9';
  }
};

export const convertStringToNumberBackwards = (string) => {
  if (string.match(/\d/)) {
    return string;
  } else if (string === 'eno') {
    return '1';
  } else if (string === 'owt') {
    return '2';
  } else if (string === 'eerht') {
    return '3';
  } else if (string === 'ruof') {
    return '4';
  } else if (string === 'evif') {
    return '5';
  } else if (string === 'xis') {
    return '6';
  } else if (string === 'neves') {
    return '7';
  } else if (string === 'thgie') {
    return '8';
  } else if (string === 'enin') {
    return '9';
  }
};

export const findSum2 = (input) => {
  const lines = input.split('\n');
  let calibrationValues = 0;
  lines.forEach((line) => {
    // find the first number in the string
    // the number could also be spelled out
    // regex that will find numbers one through nine spelled out or a number 1 through 9 as digits
    const regex = /(one|two|three|four|five|six|seven|eight|nine|\d)/gi;
    // reverse the spelling so I can find the last digit
    const reversedRegex = /(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/gi;

    // a match that will find either a number or a word
    const match = line.match(regex);
    const first = convertStringToNumber(match[0]);

    // reverse the line so that its easier to find the last digit
    var reversedLine = reverse(line);

    const lastString = reversedLine.match(reversedRegex);
    const last = convertStringToNumberBackwards(lastString[0]);

    const calibrationValue = first + last;
    calibrationValues += parseInt(calibrationValue);
  });
  return calibrationValues;
};
