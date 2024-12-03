import { day14Input as puzzleInput } from './puzzleinputs/day14';
const day14Input = puzzleInput.split('\n').map((i) => i.split(''));

type Coord = {
  row: number;
  charIndex: number;
};

function moveONorth(lines: string[][], currentLocation: Coord) {
  if (currentLocation.row == 0) return;

  // north
  const above = lines[currentLocation.row - 1][currentLocation.charIndex];
  if (above == '#') return;

  if (above == '.') {
    // move O to next
    lines[currentLocation.row - 1][currentLocation.charIndex] = 'O';
    // make old spot empty
    lines[currentLocation.row][currentLocation.charIndex] = '.';
    moveONorth(lines, { row: currentLocation.row - 1, charIndex: currentLocation.charIndex });
  }
}
// I think this isn't working b/c the order that they are processed
// maybe if i reverse the order I process them
function moveOWest(lines: string[][], currentLocation: Coord) {
  if (currentLocation.charIndex == 0) return;

  const west = lines[currentLocation.row][currentLocation.charIndex - 1];
  if (west == '#') return;

  if (west == '.') {
    // move O to next
    lines[currentLocation.row][currentLocation.charIndex - 1] = 'O';
    lines[currentLocation.row][currentLocation.charIndex] = '.'; // make old spot empty
    moveOWest(lines, { row: currentLocation.row, charIndex: currentLocation.charIndex - 1 });
  }
}
// same here, probably need to process in a dif order
function moveOSouth(lines: string[][], currentLocation: Coord) {
  if (currentLocation.row == lines.length - 1) return;

  const south = lines[currentLocation.row + 1][currentLocation.charIndex];
  if (south == '#') return;

  if (south == '.') {
    // move O to next
    lines[currentLocation.row + 1][currentLocation.charIndex] = 'O';
    lines[currentLocation.row][currentLocation.charIndex] = '.'; // make old spot empty
    moveOSouth(lines, { row: currentLocation.row + 1, charIndex: currentLocation.charIndex });
  }
}
function moveOEast(lines: string[][], currentLocation: Coord) {
  if (currentLocation.charIndex == lines.length - 1) return;

  const east = lines[currentLocation.row][currentLocation.charIndex + 1];
  if (east == '#') return;

  if (east == '.') {
    // move O to next
    lines[currentLocation.row][currentLocation.charIndex + 1] = 'O';
    lines[currentLocation.row][currentLocation.charIndex] = '.'; // make old spot empty
    moveOEast(lines, { row: currentLocation.row, charIndex: currentLocation.charIndex + 1 });
  }
}

let loadOnBeam = 0;
let loopCount = 0;
// for (let i = 0; i < 3; i++) {
while (loopCount < 1000) {
  loadOnBeam = 0;
  day14Input.forEach((row, lineIndex, arr) => {
    row.forEach((char, charIndex) => {
      if (char == 'O') {
        moveONorth(arr, { row: lineIndex, charIndex });
      }
    });
  });

  day14Input.forEach((row, lineIndex, arr) => {
    row.forEach((char, charIndex) => {
      if (char == 'O') {
        moveOWest(arr, { row: lineIndex, charIndex });
      }
    });
  });

  for (let i = day14Input.length - 1; i > -1; i--) {
    const row = day14Input[i];
    row.forEach((char, charIndex) => {
      if (char == 'O') {
        moveOSouth(day14Input, { row: i, charIndex });
      }
    });
  }

  day14Input.forEach((row, lineIndex, arr) => {
    let loopCount = row.length - 1;
    for (let i = loopCount; i >= 0; i--) {
      let char = row[i];
      if (char == 'O') {
        moveOEast(arr, { row: lineIndex, charIndex: i });
      }
    }
  });

  day14Input.forEach((row, lineIndex, arr) => {
    row.forEach((char, charIndex) => {
      if (char == 'O') loadOnBeam += arr.length - lineIndex;
    });
  });
  loopCount++;
  console.log(loadOnBeam);
}
console.log({ loopCount, loadOnBeam });

const out = day14Input;
// console.log(out);
let distances = 0;

console.log(out.map((row) => row.join('')).join('\n'));
// console.log(loadOnBeam);
