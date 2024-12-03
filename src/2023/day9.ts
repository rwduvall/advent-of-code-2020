let exampleLine1 = `0 3 6 9 12 15`;
let exampleLine2 = `1 3 6 10 15 21`;
let exampleLine3 = `10 13 16 21 30 45`;

function parseLine(input: string) {
  let r = input.split(' ');
  return r.map((string) => Number(string));
}

function findNextRow(rowAbove: number[]) {
  const newRow = [];
  rowAbove.forEach((num, index, arr) => {
    newRow.push(arr[index + 1] - num);
  });
  // drop last NaN. pop works but not ideal
  newRow.pop();
  return newRow;
}

function getToZeroRow(firstRow: number[]): number[][] {
  let arrays = [firstRow];
  while (
    // make sure all items are 0. tried equal to 0 at first but that was wrong
    arrays[arrays.length - 1].filter((v) => v != 0).length > 0
    // some of every operate
  ) {
    arrays.push(findNextRow(arrays[arrays.length - 1]));
  }
  return arrays;
}

function addOneToEndOfEachArr(rows: number[][]) {
  // reverse to make traversing simpler
  rows.reverse();
  let newLast = 0;
  rows.forEach((row) => {
    newLast += row[row.length - 1];
  });
  return newLast;
}

// Part 2

function addOneToStartOfEachArr(rows: number[][]): number {
  rows.reverse();
  let newLast = 0;
  const loops = rows.length - 1;
  for (let i = 0; i < loops; i++) {
    let index = i;
    // below since its flipped
    let lastOfBelowAbove = rows[index + 1][0];
    newLast = lastOfBelowAbove - newLast;
    rows[index + 1].unshift(newLast);
  }
  return newLast;
}

function findAnswer(input: string, func: (rows: number[][]) => number) {
  let parsed = input.split('\n');
  const answerArr = parsed.map((line) => func(getToZeroRow(parseLine(line))));
  return answerArr.reduce((acc, curr) => acc + curr, 0);
}

const day9Example = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

// console.log('part 1:', findAnswer(day9Part1, addOneToEndOfEachArr));
// console.log('part 2:', findAnswer(day9Part1, addOneToStartOfEachArr));
