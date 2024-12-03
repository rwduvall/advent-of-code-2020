import { oxgyGen, o2Scrub } from './day3';
import { input } from './puzzleInputs/day3';

test('', () => {
  expect(oxgyGen(input)).toEqual(3311);
  expect(o2Scrub(input)).toEqual(851);
});

// 110011101111 - 3311
// 001101010 - 851
const example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
