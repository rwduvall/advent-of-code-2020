const needToLose = "X";
const theirRock = "A";
const pointsForRock = 1;

const needToDraw = "Y";
const theirPaper = "B";
const pointsForPaper = 2;

const needToWin = "Z";
const theirScissors = "C";
const pointsForScissors = 3;

const getPointsForPlay = (letter: string) => {
  if (letter == needToLose) {
    return pointsForRock;
  } else if (letter == needToDraw) {
    return pointsForPaper;
  } else {
    return pointsForScissors;
  }
};

const determinePointsFromGamePart2 = (data: ["A" | "B" | "C", "X" | "Y" | "Z"]) => {
  const theirPlay = data[0];
  const myPlay = data[1];

  const pointsForWin = 6;
  const pointsForDraw = 3;
  // they play rock
  if (theirPlay == theirRock && myPlay == needToWin) {
    return pointsForPaper + pointsForWin;
  } else if (theirPlay == theirRock && myPlay == needToLose) {
    return pointsForScissors;
  } else if (theirPlay == theirRock && myPlay == needToDraw) {
    return pointsForRock + 3;
  }
  // they play paper
  else if (theirPlay == theirPaper && myPlay == needToLose) {
    return pointsForRock;
  } else if (theirPlay == theirPaper && myPlay == needToDraw) {
    return pointsForPaper + pointsForDraw;
  } else if (theirPlay == theirPaper && myPlay == needToWin) {
    return pointsForScissors + pointsForWin;
  }
  // they play scissors
  else if (theirPlay == theirScissors && myPlay == needToDraw) {
    return pointsForScissors + pointsForDraw;
  } else if (theirPlay == theirScissors && myPlay == needToWin) {
    return pointsForRock + pointsForWin;
  } else if (theirPlay == theirScissors && myPlay == needToLose) {
    return pointsForPaper;
  }
};

const parseDay2Part2 = (input: string) => {
  return input
    .split(/\n\n/)
    .map((i) => i.split(/\n/).map((game) => game.split(" ")))
    .flat() as [["A" | "B" | "C", "X" | "Y" | "Z"]];
};

const parse = (input: string) => {
  return input
    .split(/\n\n/)
    .map((i) => i.split(/\n/).map((game) => game.split(" ")))
    .flat() as [["A" | "B" | "C", "X" | "Y" | "Z"]];
};

export const getPuzzleAnswerPart2 = (puzzleInput) => {
  const pointsPerGame = parse(puzzleInput).map((i) => determinePointsFromGamePart2(i));
  return pointsPerGame.reduce((acc, curr) => acc + curr, 0);
};

export const puzzleInputPart2 = `A X
A X
A Z
B X
A X
B Z
A X
A X
A X
A X
C Z
C Y
A X
A X
A Z
C Y
A Z
B Y
C Z
A X
B Y
C X
C Z
C Y
A Y
B X
B X
A X
B X
A X
C X
B Z
C Y
A X
A X
C Z
A Z
A X
B X
B X
A X
B X
B Y
A X
A X
A Z
A Y
C Y
A Z
C Z
C Y
A Z
A X
B Z
A X
C Y
B Z
C Y
A X
A Y
C Y
A Z
B Z
A X
C Y
A X
A X
B X
C Y
A Y
A X
C Z
B Z
A X
B X
B Z
A X
A Z
A X
A X
A Y
A Z
A X
B X
A Z
A Z
C Y
A X
B Z
C Y
C Z
A X
A Z
A X
B Y
A X
C X
A X
A X
C Y
C X
A X
C Y
B Z
C Z
C Y
B Z
A X
C Y
B Z
A X
B Z
A X
B Y
A Z
B X
A X
A X
A X
C Y
C X
A Y
C Z
C Y
B Z
A X
A X
B X
A X
A X
A X
C Y
A X
A X
A Z
C Y
A Z
A X
A X
A X
C Y
A Y
A X
A X
C Z
C Y
B X
C Z
C Y
B X
C Y
A X
C Z
A X
B Y
C X
A X
B Y
B Y
A Z
A X
A X
C X
A Y
B Y
C Y
B Z
A X
A X
A Y
A X
A X
C Y
A X
C Y
C Y
C Z
A Z
A X
C Y
C X
C Y
A X
A X
C Y
A Z
A Y
A Y
B Z
B Y
B X
C Y
A X
C Y
C Z
A X
A Y
A Y
B X
C Y
A X
B Z
A X
C Y
B X
A Y
C X
C Y
A X
C Y
B Z
C Y
C Y
C X
B X
C X
C Y
B Z
C Z
C Y
A X
A Z
C Y
A Z
B X
C X
C Y
A Z
C Y
C X
A X
A X
A X
B Y
A X
A X
B Y
B Z
A X
A Y
A Z
B Y
A X
A X
A X
B Z
A X
C Y
A X
A X
B Y
A X
C Y
B X
C Y
A X
A X
C X
A Y
A X
B X
A X
C Y
C Y
C Z
A Y
B Y
B X
A X
A X
A X
C Y
A Y
A X
A Y
C Y
A X
A X
B Y
C Z
A Y
B Z
C Y
A X
C Z
B X
C Y
B Z
C Y
B Z
A Z
A X
A X
C Z
C X
A X
A X
C Y
B Z
B Y
A X
A X
A X
B X
B X
B Y
C Y
C Z
A X
C X
C Z
A X
A X
C Y
A X
A X
C Z
B Z
B Z
A X
B X
A Z
C Z
C Z
B X
B Z
B Z
C Y
A X
A Y
C Z
A X
A X
A X
A Y
A X
A X
A Z
C Y
C Y
A X
A X
A X
A Z
B Z
C Y
A Z
A X
B Y
A X
A X
C Z
A Z
A X
C Y
A Y
C X
B Z
C Y
C Y
A X
C Y
B Y
A X
A X
C X
B X
B Z
A Y
B X
B Z
B Z
A X
A Y
B Y
B Y
A Z
C Y
A X
A X
B Y
C X
A Z
B X
B Z
A X
A Y
C Y
B X
B Y
C Y
A X
B Y
B X
A X
C Y
B Y
B Z
B Y
C Y
C Y
B Z
C Y
B X
A X
A X
B Y
B X
B X
C Y
C Z
B X
A X
A Z
A Y
C Y
C Z
A X
A X
A X
C X
A Y
C Y
C X
A X
A X
A X
A X
B Z
A X
A X
A X
A X
A X
C Y
C Z
B Z
C Z
A Z
C Z
A X
B X
A Z
A X
A X
A X
A X
B Y
A Z
C Y
B Z
A Y
C Z
C X
B Z
C Z
C Z
C X
C Y
B X
C Y
C X
A X
A Y
A X
C X
A X
A X
C X
B Z
A X
A X
B X
C Z
A X
A X
B Y
A X
B Z
C Y
A Y
A Y
C Y
A X
A Z
C X
A X
C Y
A X
B X
C Y
A X
B Y
A X
A X
A X
C Y
C X
B X
A Y
A X
A X
A X
C Y
C Z
A Z
A X
C Y
A X
B Z
C Z
B X
B X
A X
A X
C Z
C X
A X
A Z
A X
C Y
A X
C Y
A Z
A X
C Z
C X
B X
B Z
C X
A Z
B X
C Y
B X
B Y
B X
A X
C Y
B Y
C Y
C Z
C Z
B Y
C Y
B Y
A Y
B Z
A X
B Z
C Y
A X
A X
A X
A X
C Z
C Z
C Z
A X
A X
C Z
C Z
A X
C Y
A Z
A Z
B Y
C Z
A Z
C Z
C Y
A X
B Z
C Y
C Z
A Z
C Y
A X
A X
A X
A X
B Z
B Z
A X
B Z
A X
A X
A X
C Z
C X
A X
C X
A Z
B X
A X
A X
A X
A Z
B Y
B Y
A X
C Y
A X
C Y
A X
A X
A Y
B X
A X
B Z
A X
C Y
C Y
A Z
A X
A X
B X
C Y
C Z
A X
A X
B X
A Y
A Z
C Z
A X
B Z
B Y
A Y
B Z
A Y
A X
C Y
A Z
A X
A X
A X
C Y
C Y
A Z
A Y
C X
A X
A X
A X
C Y
A X
B Z
C Y
B Y
C Z
A X
B Z
B Y
B X
C Y
C Z
B Y
C Y
C Y
C Y
A Z
A X
B Y
C Y
C Z
A Y
A X
B Z
C Y
A Z
C Z
A X
A Z
B X
C Z
A X
B Y
C Z
C Y
C Y
B Y
A Y
C Y
B Y
C Y
C Z
B X
A X
A X
A X
B Y
A X
A X
C Z
C Y
C Z
B Z
A X
B X
A Y
A Z
B Y
C Y
C X
A X
C Y
A Y
A Z
B Z
A Z
A Y
C Y
A X
C X
C Y
B Y
B Y
B Y
A X
C Z
A X
C Y
A Z
B Z
C Y
C Y
C Y
C Y
B X
A Y
C X
C X
A X
A Z
B X
A X
C Y
B X
C Y
B X
C Y
A X
A Z
C Y
A Y
A X
A Z
A X
B Z
A X
B Y
C Z
A X
B X
B X
A X
C Z
A X
C Y
A X
A X
B X
A X
C Z
A X
A Y
C Y
B X
B X
B Z
A X
A X
A X
A X
B Y
A Y
A X
C Z
C Y
C Z
A Z
A X
B X
C Y
A X
C Z
A Z
A X
A X
B X
A X
B Z
B X
A Y
A Z
A Y
A Z
A X
C Y
C Y
B X
C Y
B X
A X
B Z
C Y
A Y
C Y
C Y
A Z
B Z
B X
A X
B Z
C Y
C Y
C Y
A Z
A X
A X
C Y
B X
B X
A X
A Z
A X
A X
A Z
C Y
B X
A X
A Y
A X
B Z
A Z
C Y
A X
A X
A Y
A X
A X
A X
B X
B X
A Z
B Z
A Y
A X
B X
C X
A Z
B Z
C Y
B Y
C Y
B X
A X
C Z
B Y
A X
C Y
C Y
C Y
A Y
B Y
A Z
B Z
A X
A Y
C Y
C X
A X
C Y
C Y
A X
A X
A X
B X
B Z
A Z
A X
C Z
C Z
B X
C Z
A Y
A X
A Y
B Z
A Y
A X
C Y
B X
A X
B X
A X
C X
A X
B Y
A Z
C Y
A X
C X
B Z
A X
C Y
A Y
C Y
A X
B X
C Y
A X
B X
A X
A Y
C Z
A X
A X
A X
A X
B X
C X
A X
A X
C Y
C Y
A X
A X
A Y
C Y
A X
B Z
A Z
C Y
B X
A Y
A Z
A X
A X
C X
A X
B X
A X
C Y
B Z
B Z
A X
B Y
A X
B Y
B Z
B X
B Y
C Y
A X
C Y
A X
A X
A X
A Z
C Y
C Y
A Y
B X
A Z
A Y
A Y
A X
B X
C Y
A X
C X
C Y
C Z
A X
A Z
A Z
A Z
A X
C Y
A X
A Y
A X
C Z
C Y
C Y
B Z
B Z
B Z
A X
C Z
A Z
A X
A X
A X
B Z
B X
A X
B Z
B Y
C Y
C Y
A X
A X
C Y
C Y
C Z
B X
A X
A X
C Y
A X
C Y
A Z
C Y
A X
C Z
B Z
C Z
C Y
B Z
C Y
B X
B X
B X
C Y
A Z
A X
C Y
A Y
C Z
A Y
C Z
B Y
C Y
A X
A Y
A X
C X
C Y
C Y
C Y
C Y
A Y
C Y
B Z
C Y
A X
C Z
B Z
A Y
A X
B Z
A Y
A Z
A X
C Y
C Y
C Y
A Y
B X
C Z
A X
B Z
C Z
A X
B X
B Y
A X
C Y
B X
A Z
A Y
A X
A X
A X
B X
C Z
C Y
B Y
B X
C Y
A X
A X
C Y
A Z
C X
A X
A Z
A X
A X
C Y
A Z
A Y
A X
A Z
B Z
A X
B X
B X
B X
B X
C Y
B Y
A X
A Y
A Y
A Y
B Y
A Y
C Z
A X
A X
A X
A X
A Y
C Y
B X
A X
A X
A X
A Z
A X
A X
C Y
B Y
B X
B X
A X
A X
C Y
A Z
C X
C X
C Y
A Y
C Z
B Z
B X
A X
A X
C X
A X
C X
A Y
B X
A X
B X
B Z
B Z
B Z
A X
B Y
C Z
C X
B X
B Z
A X
A X
C Z
A X
A X
B Y
A X
C Y
C Z
B Z
B Z
A X
A X
A X
A X
B X
B Z
C Z
A Y
B X
A X
C Y
C Y
A Z
C Z
C Y
A X
C Z
A Z
C Y
C Y
A X
A X
B Y
B Z
A Z
A Y
A Y
A X
B X
A Z
C Y
C Y
B Z
B Z
B Y
C Y
B Y
A X
C Z
B Z
C X
C Y
A X
A X
B X
C Y
A X
A X
A Z
A Y
C Y
A X
A X
B X
B X
C Z
C Y
B X
C Y
B Z
A X
A X
C Y
A Y
B Z
B Z
A Y
A Z
A X
A X
A Z
C Y
A X
C Y
A Y
C Y
C Z
B X
B X
C Y
A X
B X
B Z
C Y
C Y
C X
A Y
C Z
A X
C Y
A Y
A X
A Y
A X
A X
A Y
B X
B Y
A X
C Z
C Y
C Z
A Z
B Y
C Y
C X
C Y
A X
C Z
A X
C Z
A X
B X
A X
A X
B X
A X
A Y
A X
C Z
C Y
A Z
B Y
A X
A Y
A X
C X
B X
B X
A Z
C Z
C Y
B Y
A X
B Y
A Z
A X
A X
A X
A X
C Y
C Y
B Y
C Y
B Z
A X
A X
B Z
B Y
C Y
C Y
C Z
C Y
A X
A X
C X
B Y
B X
C X
B X
B Y
A X
C X
C X
A Y
C X
A X
A Z
C X
B Y
C Y
B Z
B X
A X
A X
A X
B X
C Y
C Y
B X
A X
C Y
A X
A X
A X
C Z
A X
A X
C Z
A X
C X
C Y
C Z
A X
A X
C Y
A Y
A X
C Y
A Y
A X
A Y
A Z
A X
C Y
A X
C Y
A X
A Y
A Z
B X
B X
B X
B Y
C Z
B Z
C Y
B Z
A Z
A X
A X
A X
B X
C Y
B X
B Z
A Z
C Y
A Z
C X
A X
B Y
B Y
A Z
C Y
A X
A X
A X
A X
B Y
C X
A X
C Z
C Y
B X
A Y
A Z
A X
B Y
C X
B Z
B Y
A Y
A X
A X
A X
B Z
A X
C Z
A X
C Y
A X
B X
A X
A X
A X
A X
A X
A Z
A Y
A Y
A Z
B X
A Y
B Z
C Y
B Z
C Z
A Z
C X
C Y
B X
B X
B Z
A X
A X
A Z
A X
A X
C Y
C Y
A Z
C Z
A Z
B Z
C X
A X
C Z
C Y
A X
C Z
B Y
B Z
A Y
A X
C Y
A X
C X
A Z
A X
A X
A Y
C Y
C Y
A X
A X
C Y
B Y
B Z
C Y
C Z
A Z
A Y
C Z
B X
C Y
C Y
A X
A X
A X
A X
B Z
A X
C Y
A X
A X
B Z
A X
A X
A X
A X
B X
A X
C Y
A X
A X
C Y
A Y
A X
C Y
A X
A Z
B X
A Y
A Z
C X
C Y
A X
C Z
C Y
A Y
A X
A X
C X
A X
B Y
A X
C Z
A X
B Y
A X
C X
C Z
A X
C Y
C X
C Y
B Z
A Z
A Y
A Y
C Y
C Z
C Y
B X
C Y
A X
C Y
C Z
A Z
C X
A X
A Y
B Y
C Z
C Y
B Z
C Z
C Y
B Z
C Y
A X
B Z
B Z
C Z
C X
C Y
A X
C Z
C Y
A X
C Y
A X
C Y
A X
B X
C Y
A X
B X
A Z
B Z
A X
A Z
A Y
A X
A Y
A X
C Z
A Y
A X
C Y
B X
A X
B Z
C Y
B X
A X
C Y
A X
A Y
C Y
B X
C Y
A Y
C Y
C Z
B Y
C Y
A Y
C Y
B X
A X
A X
A X
A Z
A X
B Z
A X
C Y
A Z
B X
A X
A X
A X
A X
A Z
C Y
B Z
A X
B Y
C Y
C Y
B Y
C X
A X
A X
A X
B X
B X
B X
C X
B Y
B Z
C Y
C Y
B X
B Z
A Z
A Y
A X
A X
A X
C Y
A X
C Y
C Z
C Z
C Z
A Y
C Y
A X
A X
B Z
A Y
C X
A Z
A X
A X
A X
A X
A X
A X
A Z
C Y
C Y
A Z
A X
A X
A X
A X
B X
C Y
A X
B X
C Y
A Y
A Y
C Y
A X
A Y
B Z
A X
A X
C Y
C Y
A Y
A X
A X
A Z
B X
A X
C Y
A X
B X
C X
A X
A X
A X
A X
A X
C Y
B Y
C Y
C Z
A Y
A X
C Y
B X
B X
A X
A Y
B X
B Y
C Y
C X
C X
A X
A X
A X
A X
A Z
C Z
A X
A X
A X
A Y
B X
B X
A X
A X
A X
A X
C Z
C Y
A Z
C Y
B X
A X
C Y
C Z
A Z
B Y
A X
B Y
A X
A Z
C Y
C Y
C Y
A X
C Y
A X
A Z
B Z
B Y
A Y
C X
C Z
A Y
C X
A X
A X
C X
A X
A Y
A X
A Z
A X
A X
A X
C Y
A Y
A Y
B Z
A X
C Y
C Y
B Y
A Z
C Z
B Z
A X
A X
C X
A Y
A Y
C Y
C Z
B X
B X
C Z
B Z
A X
C Z
A X
A Z
C Z
C Y
B Z
B Y
C Z
B Z
C Y
B X
C Y
A Z
C Y
B X
C Z
A Z
A X
B X
B Y
B Z
B Z
B X
C Y
A X
C X
A X
B X
B Z
A Z
A X
A Y
B Y
A X
C Y
A Z
B X
A Y
B X
A X
B Z
A X
C X
A X
C Y
B X
B Z
B Z
A X
A Z
B Y
A X
A X
B X
C Y
C Z
A X
A X
A X
C Z
C Y
A Z
B X
A Z
C Y
A X
A X
A Z
B X
C Y
A X
A X
A X
A X
B Z
A X
A Z
A X
C Y
C X
C Y
A X
B X
B Z
A X
C X
A X
A Y
A X
C Z
C Y
C Y
C Y
B X
B Z
C Y
A X
A Y
C Z
A X
C Y
B Y
B Y
A X
A X
A X
A X
C Y
B Z
C Z
C Y
A Y
B Y
C Y
A X
B X
A Y
C X
C Y
C Y
A Z
C Y
C Z
C Y
B X
C Y
B X
B X
C Y
B Z
A X
A X
B X
C Y
A Y
B Y
A X
A X
B Y
C Y
A X
B X
A X
A Y
B X
C Y
A Z
A X
C Y
A X
B Y
A Z
C Y
B Z
A Z
B Z
C X
A X
A Z
B X
B Y
A X
A Y
B X
C Y
C Y
C Y
C Y
A Z
C Z
A X
B Y
C Z
A X
C Y
B Y
C Z
C Y
A Z
A X
C Y
C Y
C Z
A X
C Y
B Y
B Z
B X
A X
C Z
C X
A Y
B X
A X
A X
A X
C Z
C Z
A Y
C Y
B Y
C X
B X
C X
A X
A X
B Y
A X
A X
C X
A Y
A X
C Y
A Y
B X
C Y
A X
C Z
A Z
A Y
A X
A Y
B Y
A X
A X
C Z
A Y
C Y
B Z
C Y
B Z
A X
B Z
B Z
A Y
B Z
B X
C X
A X
A X
B Y
A X
A X
A X
A X
B X
C Z
A X
A Y
B X
C X
C Y
A X
A X
C Y
A X
A X
C Z
C Z
B X
A Z
B Z
A X
A X
C Y
A Y
A X
A Z
A Y
C Y
A X
C Y
B X
A X
A X
A X
A Z
A Z
A X
B Z
A Z
C Z
B Y
A X
C Y
B Z
C Y
A X
B X
C Y
A X
C Y
A Z
A X
A Y
B X
C X
B X
A X
C Y
C Y
B X
B X
C Y
A X
A Y
B Y
A X
C X
C Y
A Y
C Y
C Z
A X
B Y
A Y
A X
A Z
A Y
C Y
A X
A X
B Z
B Y
B Y
A X
C Z
A Y
A X
B Z
C Z
B Z
A X
B X
C X
A X
A X
A X
A X
A X
C X
A X
A Z
A X
C Z
A X
A X
B Z
A Z
B Z
A Y
A X
C Y
A X
B Y
C Y
B Z
B Z
A X
B Z
C Y
B Z
A Z
B Y
B Z
B X
B Y
A X
B X
A X
C X
B Y
B Y
B X
B Z
C Y
C Y
B Z
A Z
A X
A X
C Y
A X
A X
A Y
A X
B Z
A X
A X
B Z
B Z
A X
A Z
A X
A X
A X
A Z
A Z
C Z
C Y
A Y
A X
C Z
C Z
B Y
B X
B Z
C Y
A X
B Z
A Z
A X
A X
C X
A X
C Y
C X
A Z
A Y
B Z
C Z
B Y
B X
C Z
A Z
B X
A X
A X
A X
A Z
B Y
B Z
A X
A Y
C Y
A X
A X
C Z
B Z
C Y
C X
C Y
C Y
B Z
A X
B X
A X
A Z
B Z
A X
B X
C Y
C Y
B Y
A X
A Y
C X
B X
C Z
B X
A X
C Y
A X
C Y
A X
B Z
C Y
B Z
A Z
A Z
C Z
C Y
A Z
C Y
A Z
C Y
B X
A X
B X
A X
C Y
C X
C Z
A X
A X
A X
B Y
A X
B Z
A X
A X
A X
C Y
C Y
A X
B X
C Y
A Z
A X
C Y
B X
C Z
C Y
C X
B X
A X
C X
C Y
A Y
B Z
B Y
B X
C Y
C Z
B Y
A X
C X
A X
B X
C Z
A X
A X
C Y
A Z
A X
C Y
A Z
C X
A X
C Y
A Z
A X
A X
A Y
A X
C Y
A X
C Y
A X
A Y
C Y
C Y
B Y
B Y
B Z
A X
B X
B Z
B X
A X
B X
A X
A X
A X
A X
C X
B X
B X
A X
A Y
A X
B Y
A X
A Z
B Z
A Y
A X
A X
C Y
B Z
C Y
A X
C Y
A X
C Y
B X
A Z
B X
A X
A Z
B Y
B Y
C X
C Y
A X
B X
C Z
C Z
A Y
A X
C Z
A X
A X
C Z
B X
C Y
A X
C X
C Z
C Z
B Z
A X
A X
A X
B X
A Y
B Z
A X
B Y
A Z
A X
B Z
B Y
B X
A X
A Y
C Z
A X
C Y
C Y
A Y
A Y
A Y
C Z
C Y
B X
A Y
A Z
A Y
A X
C Z
C Y
C Y
C X
B Y
A X
A X
A X
C Y
B Y
C X
C Y
A X
A Z
B Z
B Y
B Z
B Z
B X
A X
B Z
C Y
C Y
C Y
A X
A X
B Y
B Z
B Y
C Y
B Y
A X
C X
A Z
C Y
C Y
B X
A Y
A X
C Y
A Y
A Z
B X
C Y
C Z
A X
C Y
B X
B Y
A X
A X
A X
B Z
A X
C Z
C Y
B X
C Y
C Y`;

console.log(getPuzzleAnswerPart2(puzzleInputPart2));
// console.log(getPuzzleAnswer(example));
