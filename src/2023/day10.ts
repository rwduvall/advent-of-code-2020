import * as fs from 'fs';

type Coordinate = {
  col: number;
  row: number;
};

type Diagram = string[][];

// const determineDirection = (
//   position: Coordinate,
//   diagram: Diagram
// ): Coordinate[] | null => {
//   const up = diagram[position.row + 1][position.col]; // { row: position.row + 1, col: position.col };
//   const down = { row: position.row - 1, col: position.col };
//   const left = { row: position.row, col: position.col - 1 };
//   const right = { row: position.row, col: position.col + 1 };

//   if (up == "|") {
//     return;
//   }

//   switch (char) {
//     case "|":
//       // if ()
//       return [up, down];
//     // up, down
//     case "-":
//       return [left, right];
//     // left, right
//     case "L":
//       return [up, right];
//     // up, right
//     case "J":
//       return [up, left];
//     case "7":
//       return [down, left];
//     // down, left
//     case "F":
//       return [down, right];
//     // down right
//     case ".":
//       return null;
//     // no where
//     case "S":
//       return null;
//     // start
//   }
// };

function parsePipes(input: string) {
  let output = input.split('\n');
  const diagram = output.map((line) => line.split(''));
  let lineWithS = output.findIndex((line) => line.includes('S'));

  const startCoord: Coordinate = {
    row: lineWithS,
    col: diagram[lineWithS].indexOf('S'),
  };

  return { diagram, startCoord };
}

function coordToChar(coord: Coordinate, diagram: Diagram): string | number {
  return diagram[coord.row][coord.col] ? diagram[coord.row][coord.col] : 'null';
}

function findPipe(diagram: string[][], startPosition: Coordinate) {
  let pipeSections: Coordinate[] = [startPosition];
  let queue = [startPosition];
  let lengthOfPipe = 0;
  while (queue.length > 0) {
    //   for (let i = 0; i < 20; i++) {
    let firstItemPosition = queue.shift();
    pipeSections.push(firstItemPosition);

    let firstItemChar = diagram[firstItemPosition.row][firstItemPosition.col];

    const up = { row: firstItemPosition.row - 1, col: firstItemPosition.col };
    const down = { row: firstItemPosition.row + 1, col: firstItemPosition.col };
    const left = { row: firstItemPosition.row, col: firstItemPosition.col - 1 };
    const right = {
      row: firstItemPosition.row,
      col: firstItemPosition.col + 1,
    };

    switch (firstItemChar) {
      case '|':
        // only check up and down
        if (diagram[down.row]) {
          if (diagram[down.row][down.col] == '|' || diagram[down.row][down.col] == 'L' || diagram[down.row][down.col] == 'J') {
            queue.push(down);
          }
        }
        if (diagram[up.row]) {
          if (diagram[up.row][up.col] == '|' || diagram[up.row][up.col] == '7' || diagram[up.row][up.col] == 'F') {
            queue.push(up);
          }
        }
        break;
      case '-':
        //     // left, right
        if (diagram[left.row]) {
          if (diagram[left.row][left.col] == '-' || diagram[left.row][left.col] == 'F' || diagram[left.row][left.col] == 'L') {
            queue.push(left);
          }
        }
        if (diagram[right.row]) {
          if (diagram[right.row][right.col] == '7' || diagram[right.row][right.col] == '-' || diagram[right.row][right.col] == 'J') {
            // the item to the right connects so add it
            queue.push(right);
          }
        }
        break;
      case 'L':
        //     // up, right
        if (diagram[up.row]) {
          if (diagram[up.row][up.col] == '|' || diagram[up.row][up.col] == '7' || diagram[up.row][up.col] == 'F') {
            queue.push(up);
          }
        }
        if (diagram[right.row]) {
          if (diagram[right.row][right.col] == '7' || diagram[right.row][right.col] == '-' || diagram[right.row][right.col] == 'J') {
            // the item to the right connects so add it
            queue.push(right);
          }
        }
        break;
      case 'J':
        //       return [up, left];
        if (diagram[up.row]) {
          if (diagram[up.row][up.col] == '|' || diagram[up.row][up.col] == '7' || diagram[up.row][up.col] == 'F') {
            queue.push(up);
          }
        }
        if (diagram[left.row]) {
          if (diagram[left.row][left.col] == '-' || diagram[left.row][left.col] == 'F' || diagram[left.row][left.col] == 'L') {
            queue.push(left);
          }
        }
        break;
      case '7':
        //     // down, left
        if (diagram[down.row]) {
          if (diagram[down.row][down.col] == '|' || diagram[down.row][down.col] == 'L' || diagram[down.row][down.col] == 'J') {
            queue.push(down);
          }
        }
        if (diagram[left.row]) {
          if (diagram[left.row][left.col] == '-' || diagram[left.row][left.col] == 'F' || diagram[left.row][left.col] == 'L') {
            queue.push(left);
          }
        }
        break;
      case 'F':
        //     // down right
        if (diagram[down.row]) {
          if (diagram[down.row][down.col] == '|' || diagram[down.row][down.col] == 'L' || diagram[down.row][down.col] == 'J') {
            queue.push(down);
          }
        }
        if (diagram[right.row]) {
          if (diagram[right.row][right.col] == '7' || diagram[right.row][right.col] == '-' || diagram[right.row][right.col] == 'J') {
            // the item to the right connects so add it
            queue.push(right);
          }
        }
        break;
      case '7':
        if (diagram[left.row]) {
          if (diagram[left.row][left.col] == '-' || diagram[left.row][left.col] == 'F' || diagram[left.row][left.col] == 'L') {
            queue.push(left);
          }
        }
        if (diagram[up.row]) {
          if (diagram[up.row][up.col] == '|' || diagram[up.row][up.col] == '7' || diagram[up.row][up.col] == 'F') {
            queue.push(up);
          }
        }
        break;
      case 'S':
        // check'em all
        if (diagram[right.row]) {
          if (diagram[right.row][right.col] == '7' || diagram[right.row][right.col] == '-' || diagram[right.row][right.col] == 'J') {
            // the item to the right connects so add it
            queue.push(right);
          }
        }

        if (diagram[down.row]) {
          if (diagram[down.row][down.col] == '|' || diagram[down.row][down.col] == 'L' || diagram[down.row][down.col] == 'J') {
            queue.push(down);
          }
        }

        if (diagram[left.row]) {
          if (diagram[left.row][left.col] == '-' || diagram[left.row][left.col] == 'F' || diagram[left.row][left.col] == 'L') {
            queue.push(left);
          }
        }

        if (diagram[up.row]) {
          if (diagram[up.row][up.col] == '|' || diagram[up.row][up.col] == '7' || diagram[up.row][up.col] == 'F') {
            queue.push(up);
          }
        }
      //       return null;
      //     // start
    }

    diagram[firstItemPosition.row][firstItemPosition.col] = String(' ' + lengthOfPipe);
    lengthOfPipe += 1;
  }

  const last = pipeSections[pipeSections.length - 1];
  const lastValue = Number(diagram[last.row][last.col]);

  return lastValue;
}

function day10Part1(input: string): number {
  const parsedInput = parsePipes(input);
  const diagram = parsedInput.diagram;
  const startCoord: Coordinate = parsedInput.startCoord;

  let lengthOfPipe = findPipe(diagram, startCoord);
  return lengthOfPipe / 2;
}

function getDay10Part1Diagram(input: string): string[][] {
  const parsedInput = parsePipes(input);
  const diagram = parsedInput.diagram;
  const startCoord: Coordinate = parsedInput.startCoord;

  findPipe(diagram, startCoord);
  return diagram;
}

const simpleLoopWithGround = `.....
.S-7.
.|.|.
.L-J.
.....`;

// const parsedSimple = parsePipes(simpleLoopWithGround);
// console.log(day10Part1(simpleLoopWithGround));

const complexLoop = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

// console.log(day10Part1(complexLoop));

const loopWithNoGround = `7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`;

// console.log(day10Part1(loopWithNoGround));

// const day10Part1Diagram = getDay10Part1Diagram(part1PuzzleInput);

// no idea how to handle squeezing
function day10Part2(diagram: string[][]) {
  const regexMatcher = new RegExp('-|L|F|7|J|\\||\\.');

  const letter = diagram[0].findIndex((v) => v.match(regexMatcher));
  let startPosition: Coordinate = { row: 0, col: letter };
  exploreNonePipeArea(diagram, startPosition);
}

// this works for the first example but not relies on all being connected and outside the loop
function exploreNonePipeArea(diagram: Diagram, startPosition: Coordinate) {
  const regexMatcher = new RegExp('-|L|F|7|J|\\||\\.');
  // row will need adjusted here
  const queue = [startPosition];
  while (queue.length > 0) {
    let first = queue.shift();
    diagram[first.row][first.col] = 'I';
    const up = { row: first.row - 1, col: first.col };
    const down = { row: first.row + 1, col: first.col };
    const left = { row: first.row, col: first.col - 1 };
    const right = {
      row: first.row,
      col: first.col + 1,
    };

    if (up.row > 0) {
      if (diagram[up.row][up.col].match(regexMatcher)) {
        queue.push(up);
      }
    }
    if (first.row + 1 != diagram.length) {
      if (diagram[down.row][down.col].match(regexMatcher)) {
        queue.push(down);
      }
    }
    if (right.col < diagram[0].length) {
      if (diagram[right.row][right.col].match(regexMatcher)) {
        queue.push(right);
      }
    }
    if (left.col > -1) {
      if (diagram[left.row][left.col].match(regexMatcher)) {
        queue.push(left);
      }
    }
    console.log('----------');
    console.log(diagram);
  }
  console.log(diagram);
}

const day10Part2Example = `...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........`;

const day10Part2Example2 = `.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`;

const day10Example3 = `FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`;

const day10Part2ExampleDiagram = getDay10Part1Diagram(day10Example3);
day10Part2(day10Part2ExampleDiagram);
console.log(day10Part2ExampleDiagram);

const filename = 'output2.txt';
fs.writeFile(filename, day10Part2ExampleDiagram.join('\n'), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully!');
  }
});
