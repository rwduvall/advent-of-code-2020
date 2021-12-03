export const part1 = (input: number): number => {
  return Math.floor(input / 3) - 2;
};

export const part2 = (puzzleInput: string): number => {
  const arr: number[] = puzzleInput.split("\n").map(x => {
    return +part1(+x);
  });
  return arr.reduce((prev, curr) => prev + curr, 0);
};

export const p2 = (input: number) => {
  let fuel = input;
  let arr = 0;
  do {
    fuel = part1(fuel);
    arr += fuel;
  } while (part1(fuel) >= 0);
  return arr;
};

export const p2Final = (puzzleInput: string) => {
  const arr: number[] = puzzleInput.split("\n").map(x => {
    return +p2(+x);
  });
  return arr.reduce((prev, curr) => prev + curr, 0);
};
