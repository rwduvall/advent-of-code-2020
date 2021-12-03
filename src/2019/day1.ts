export const part1 = (input: number): number => {
  const p1 = input / 3;
  const p2 = Math.floor(p1);
  return p2 - 2;
};

export const part2 = (puzzleInput: string): number => {
  const arr: number[] = puzzleInput.split("\n").map(x => {
    return +part1(+x);
  });
  return arr.reduce((prev, curr) => prev + curr, 0);
};
