import { example, numberOfPossibleGames, part2 } from './day2';
import { dayTwo2024PuzzleInput as puzzleInput } from './puzzleinputs/day2';

describe('day 1', () => {
  test('part 1', () => {
    expect(numberOfPossibleGames(example)).toEqual(8);
    expect(numberOfPossibleGames(puzzleInput)).toEqual(1867);
  });

  test('part 2', () => {
    expect(part2(example)).toEqual(2286);
    // expect(part2Refactor(example)).toEqual(2286);
    expect(part2(puzzleInput)).toEqual(84538);
  });
});
