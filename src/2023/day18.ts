import * as fs from 'fs';
import { day18Example } from './puzzleinputs/day18';

type Direction = {
  direction: string;
  distance: number;
  color: string;
};

type Coordinate = {
  col: number;
  row: number;
};

const instructions = day18Example.split('\n').map((v) => {
  const line = v.split(' ');
  const instruction: Direction = { direction: line[0], distance: Number(line[1]), color: line[2] };
  return instruction;
});

const mapLength = instructions
  .filter((i) => i.direction === 'R')
  .map((i) => i.distance)
  .reduce((pre, curr) => pre + curr, 0);

const mapHeight = instructions
  .filter((i) => i.direction === 'D')
  .map((i) => i.distance)
  .reduce((pre, curr) => pre + curr, 1);

// const map = Array.from({ length: mapHeight }, () => Array(mapLength).fill('.'));
const map = [['S']];
let currentCoord: Coordinate = { col: 0, row: 0 };

function followDirection(direction: Direction, currentLocation: Coordinate) {
  if (direction.direction === 'R') {
    for (let i = 1; i <= direction.distance; i++) {
      if (currentLocation.col + i > map[0].length - 1) {
        map.forEach((row) => row.push('.'));
      }
      map[currentLocation.row][currentLocation.col + i] = '#';
    }
    currentCoord = { col: currentLocation.col + direction.distance, row: currentLocation.row };
  }
  if (direction.direction === 'D') {
    for (let i = 1; i <= direction.distance; i++) {
      if (currentLocation.row + i > map.length - 1) {
        map.push(Array(map[0].length).fill('.'));
      }
      map[currentLocation.row + i][currentLocation.col] = `#`;
    }
    currentCoord = { col: currentLocation.col, row: currentLocation.row + direction.distance };
  }
  if (direction.direction === 'L') {
    for (let i = direction.distance; i >= 0; i--) {
      if (currentLocation.col - i < 0) {
        map.forEach((row) => row.unshift('.'));
      }
      const absCol = Math.abs(currentLocation.col - i);
      map[currentLocation.row][absCol] = '#';
    }
    currentCoord = { col: Math.abs(currentLocation.col - direction.distance), row: currentLocation.row };
  }
  if (direction.direction === 'U') {
    for (let i = 1; i <= direction.distance; i++) {
      if (currentLocation.row - i < 0) {
        map.unshift(Array(map[0].length).fill('.'));
        currentLocation.row += 1; // account for the added item
      }
      map[currentLocation.row - i][currentLocation.col] = '#';
    }
    currentCoord = { col: currentLocation.col, row: Math.abs(currentLocation.row - direction.distance) };
  }
}

instructions.forEach((instruction) => {
  followDirection(instruction, currentCoord);
});

const out = map.map((row) => row.join('')).join('\n');
console.log(
  out ===
    `#######
#.....#
###...#
..#...#
..#...#
###.###
#...#..
##..###
.#....#
.######`
);
console.log(out);
const filename = 'outPutLavaFlow.txt';
fs.writeFile(filename, out, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully!');
  }
});
