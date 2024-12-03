import * as fs from 'fs';

type Coordinate = {
  col: number;
  row: number;
};

const day11Example1 = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

const day11Expanded = `....#........
.........#...
#............
.............
.............
........#....
.#...........
............#
.............
.............
.........#...
#....#.......`;

function replaceGalaxyWithNumber(input: string) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '#') {
      count++;
    }
  }
  let inputWithNumbers = input;
  for (let i = 1; i < count + 1; i++) {
    inputWithNumbers = inputWithNumbers.replace('#', String(i));
  }
  return { inputWithNumbers, count };
}

function inputToRows(input: string): string[] {
  return input.split('\n');
}

function expand(input: string): string {
  let data = inputToRows(input);

  const colWithoutGalaxy = columnsWithoutAGalaxy(data);
  data = data.map((row) => {
    return insertColIn(row, colWithoutGalaxy);
  });
  const rowsWithoutGalaxy = rowsContainingGalaxy(data);

  const newRow = Array(data[0].length).fill('.').join('');
  rowsWithoutGalaxy.forEach((v, index) => {
    data.splice(v + index, 0, newRow);
  });
  return data.join('\n');
}

function rowsContainingGalaxy(data: string[]): number[] {
  const rowsWoutG = [];
  data.forEach((v, index) => {
    if (!v.includes('#')) {
      rowsWoutG.push(index);
    }
  });

  return rowsWoutG;
}

function insertColIn(row: string, colsToInsert: number[]) {
  const rowArray = row.split('');
  for (let i = 0; i < colsToInsert.length; i++) {
    rowArray.splice(colsToInsert[i], 1, '..');
  }
  return rowArray.join('');
}

function columnsWithoutAGalaxy(data: string[]): number[] {
  let colWithOutGalaxy = [];
  for (let i = 0; i < data[0].length - 1; i++) {
    let colValues = [];
    data.forEach((row) => {
      colValues.push(row.charAt(i));
    });
    const colContainsGalaxy = colValues.some((v) => v == '#');
    if (!colContainsGalaxy) {
      colWithOutGalaxy.push(i);
    }
    // console.log({ colValues, i, colContainsGalaxy });
  }

  return colWithOutGalaxy;
}

function findDistance(galaxy1: Coordinate, galaxy2: Coordinate) {
  const x1 = galaxy1.row;
  const y1 = galaxy1.col;
  const x2 = galaxy2.row;
  const y2 = galaxy2.col;
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);

  let distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);
  return distance;
}

function findAnswerDay11(input: string): number {
  const expanded = expand(input);
  const numberOfGalaxies = replaceGalaxyWithNumber(expanded);
  //   console.log(numberOfGalaxies.inputWithNumbers.indexOf('1') % 13);
  const x = numberOfGalaxies.inputWithNumbers.indexOf('2') / 13;
  console.log({ x: Math.ceil(x) });
  //   console.log(numberOfGalaxies.inputWithNumbers.indexOf('2')); //% 13);

  const arrayVersionOfData = inputToRows(numberOfGalaxies.inputWithNumbers).map((row) => row.split(''));
  const galaxiesWithCoords = [];
  for (let i = 1; i < numberOfGalaxies.count; i++) {
    const x = Math.floor(numberOfGalaxies.inputWithNumbers.indexOf(`${i}`) / 13);
    console.log(i, x);
  }
  return numberOfGalaxies.count;
}

const inputAsArray = [
  ['.', '.', '.', '.', '1', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['3', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '4', '.', '.', '.', '.'],
  ['.', '5', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['8', '.', '.', '.', '.', '9', '.', '.', '.', '.', '.', '.', '.'],
];

// findAnswerDay11(day11Example1);

const parsedInput = inputToRows(day11Example1);
const parsedExpanded = inputToRows(`....#........
.........#...
#............
.............
........#....
.#...........
............#
.............
.........#...
#....#.......`);

// test inserting column
// for (let i = 0; i < parsedInput.length; i++) {
//   const before = parsedInput[i];
//   const after = parsedExpanded[i];
//   console.log({ actual: insertColIn(before, [2, 5, 8]), expected: after });
//   console.log('col insert works', insertColIn(before, [2, 5, 8]) === after);
// }

// console.log(insertColIn('....', [2]));
// console.log('expand works correctly', expand(day11Example1) === day11Expanded);

const exampleAsArray = expand(day11Example1);
console.log(exampleAsArray);
//   .split('\n')
//   .map((v) => v.split(''));

const filename = 'outputDay11.txt';
fs.writeFile(filename, exampleAsArray, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully!');
  }
});

const fiveCoord = { x: 6, y: 1 };
const elevenCoord = { x: 11, y: 5 };

const oneCoord = { x: 0, y: 4 };
const sevenCoord = { x: 10, y: 10 };
