type Galaxy = [number, number];

function expandUniverse(input: string): {
  galaxies: Galaxy[];
  emptyRows: Set<number>;
  emptyCols: Set<number>;
} {
  const lines = input.trim().split('\n');
  const galaxies: Galaxy[] = [];
  const emptyRows = new Set<number>();
  const emptyCols = new Set<number>();

  // Find galaxies and empty rows
  for (let y = 0; y < lines.length; y++) {
    if (!lines[y].includes('#')) {
      emptyRows.add(y);
    }
    for (let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === '#') {
        galaxies.push([x, y]);
      }
    }
  }

  // Find empty columns
  for (let x = 0; x < lines[0].length; x++) {
    if (lines.every((line) => line[x] === '.')) {
      emptyCols.add(x);
    }
  }

  return { galaxies, emptyRows, emptyCols };
}

function calculateDistance(g1: Galaxy, g2: Galaxy, emptyRows: Set<number>, emptyCols: Set<number>, expansionFactor: number): number {
  const [x1, y1] = g1;
  const [x2, y2] = g2;
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);

  let distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);

  for (let x = minX; x < maxX; x++) {
    if (emptyCols.has(x)) {
      distance += expansionFactor - 1;
    }
  }

  for (let y = minY; y < maxY; y++) {
    if (emptyRows.has(y)) {
      distance += expansionFactor - 1;
    }
  }

  return distance;
}

function sumShortestPaths(input: string, expansionFactor: number): number {
  const { galaxies, emptyRows, emptyCols } = expandUniverse(input);
  let sum = 0;

  for (let i = 0; i < galaxies.length; i++) {
    for (let j = i + 1; j < galaxies.length; j++) {
      sum += calculateDistance(galaxies[i], galaxies[j], emptyRows, emptyCols, expansionFactor);
    }
  }

  return sum;
}

// Example usage:
const exampleInput = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
`;

console.log(sumShortestPaths(exampleInput, 2)); // Should output 374
// console.log(sumShortestPaths(puzzleInput, 2)); // part 1 10276166
// console.log(sumShortestPaths(puzzleInput, 1000000)); // part 2 598693078798
