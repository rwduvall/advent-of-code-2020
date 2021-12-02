import { number } from "yargs";

export const parse = (directions: string) => {
  return directions.split("\n");
};

export const part1 = (directionsArr: string[]) => {
  let forward = 0;
  let depth = 0;
  directionsArr.forEach(x => {
    const number: number = +x.split(" ")[1];
    if (x.startsWith("forward")) {
      forward = forward + number;
    }
    if (x.startsWith("down")) {
      depth = depth + number;
    }
    if (x.startsWith("up")) {
      depth = depth - number;
    }
  });
  return { forward, depth };
};

export const finalAnswerPart1 = (x: { forward: number; depth: number }) => {
  return x.forward * x.depth;
};

export const part2 = (directionsArr: string[]) => {
  let aim = 0;
  let horizontalPosition = 0;
  let depth = 0;
  directionsArr.forEach(x => {
    const number: number = +x.split(" ")[1];
    if (x.startsWith("forward")) {
      horizontalPosition += number;
      depth += aim * number;
    }
    if (x.startsWith("down")) {
      aim += number;
    }
    if (x.startsWith("up")) {
      aim -= number;
    }
  });
  return { horizontalPosition, depth };
};

export const finalAnswerPart2 = (x: {
  horizontalPosition: number;
  depth: number;
}) => {
  return x.horizontalPosition * x.depth;
};
