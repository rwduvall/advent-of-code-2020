type instruction = { direction: string; value: number };

export const parse = (directions: string): instruction[] => {
  const arrayOfAllInstructions = directions.split("\n");
  return arrayOfAllInstructions.map(instruction => {
    let direction = instruction.split(" ")[0];
    let value = +instruction.split(" ")[1];
    return { direction, value };
  });
};

export const part1 = (
  instructions: instruction[]
): { forward: number; depth: number } => {
  let forward = 0;
  let depth = 0;
  instructions.forEach(instruction => {
    if (instruction.direction == "forward") {
      forward += instruction.value;
    }
    if (instruction.direction == "down") {
      depth += instruction.value;
    }
    if (instruction.direction == "up") {
      depth -= instruction.value;
    }
  });
  return { forward, depth };
};

export const finalAnswerPart1 = (forward: number, depth: number): number => {
  return forward * depth;
};

export const part2 = (
  instructions: instruction[]
): { horizontalPosition: number; depth: number } => {
  let aim = 0;
  let horizontalPosition = 0;
  let depth = 0;
  instructions.forEach(instruction => {
    if (instruction.direction == "forward") {
      horizontalPosition += instruction.value;
      depth += aim * instruction.value;
    }
    if (instruction.direction == "down") {
      aim += instruction.value;
    }
    if (instruction.direction == "up") {
      aim -= instruction.value;
    }
  });
  return { horizontalPosition, depth };
};

export const finalAnswerPart2 = (
  horizontalPosition: number,
  depth: number
): number => {
  return horizontalPosition * depth;
};
