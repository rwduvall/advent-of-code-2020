export const example = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

// method to convert the input into a 2d array
export const convertInput = (input: string) => {
  return input.split('\n').map((row) => row.split(''));
};

export const listOfSpecialCharacters = ['+', '-', '*', '/', '%', '=', '$', '@', '&', '#'];

// method to find if a character in a 2d array is adjacent to another character
export const searchAdjacent = (input: string[][], row: number, col: number, char: string[]): boolean => {
  let count = 0;
  // check left
  if (col > 0) {
    if (char.includes(input[row][col - 1])) {
      count++;
    }
  }
  // check right
  if (col < input[row].length - 1) {
    if (char.includes(input[row][col + 1])) {
      count++;
    }
  }
  // check up
  if (row > 0) {
    if (char.includes(input[row - 1][col])) {
      count++;
    }
  }
  // check down
  if (row < input.length - 1) {
    if (char.includes(input[row + 1][col])) {
      count++;
    }
  }
  // check up and left
  if (row > 0 && col > 0) {
    if (char.includes(input[row - 1][col - 1])) {
      count++;
    }
  }
  // check up and right
  if (row > 0 && col < input[row].length - 1) {
    if (char.includes(input[row - 1][col + 1])) {
      count++;
    }
  }
  // check down and left
  if (row < input.length - 1 && col > 0) {
    if (char.includes(input[row + 1][col - 1])) {
      count++;
    }
  }
  // check down and right
  if (row < input.length - 1 && col < input[row].length - 1) {
    if (char.includes(input[row + 1][col + 1])) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else return false;
};

type myType = {
  rowIndex: number;
  colIndex: number;
  value: {
    number: string;
    adjacentNumbers: {
      value: string;
      index: number;
      row: number;
    }[];
  };
};

type gridNumber = { rowIndex: number; colIndex: number; value: string };

// make sure that the adjacentNumbers for an item in arr does not contain current
const preventDuplicates = (arr: myType[], current: gridNumber): boolean => {
  let result = true;
  arr.forEach((item) => {
    item.value.adjacentNumbers.forEach((number) => {
      if (number.index === current.colIndex && number.row === current.rowIndex) {
        result = false;
      }
    });
  });
  return result;
};

// method to find the adjacent numbers in the same row
// searching both before and after
// continue searching until you hit a character that is not a number
export const findAdjacentNumbers = (input: string[][], row: number, col: number) => {
  let adjacentNumbers = [];
  adjacentNumbers.push({ value: input[row][col], index: col, row: row });
  // search left
  let leftCol = col - 1;
  while (leftCol >= 0 && input[row][leftCol].match(/\d/g)) {
    adjacentNumbers.push({
      value: input[row][leftCol],
      index: leftCol,
      row: row,
    });
    // adjacentNumbers += input[row][leftCol];
    leftCol--;
  }
  // search right
  let rightCol = col + 1;
  while (rightCol < input[row].length && input[row][rightCol].match(/\d/g)) {
    adjacentNumbers.push({
      value: input[row][rightCol],
      index: rightCol,
      row: row,
    });
    // adjacentNumbers += input[row][rightCol];
    rightCol++;
  }
  adjacentNumbers.sort((a, b) => a.index - b.index);

  // before I return make sure no 2 itme have the same indexs
  // if they do remove one of them
  adjacentNumbers.forEach((item, index) => {});

  let number = '';
  adjacentNumbers.forEach((item) => {
    number += item.value;
  });

  return { number, adjacentNumbers };
};

export const part1 = (input: string): number => {
  const itemsWithSpecialCharAdjacent = [];
  const needANameForThisItsTheOrderedAnswers = [];
  const convertedInput = convertInput(input);
  // for each item in the 2d array, check if it is adjacent to a special character
  convertedInput.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (searchAdjacent(convertedInput, rowIndex, colIndex, listOfSpecialCharacters)) {
        if (convertedInput[rowIndex][colIndex].match(/\d/g)) {
          itemsWithSpecialCharAdjacent.push({
            rowIndex,
            colIndex,
            value: convertedInput[rowIndex][colIndex],
          });
        }
      }
    });
  });
  itemsWithSpecialCharAdjacent.forEach((item) => {
    // do not push if the item is already in needANameForThisItsTheOrderedAnswers
    if (
      // find the number then make sure its the same number
      preventDuplicates(needANameForThisItsTheOrderedAnswers, item)
    ) {
      needANameForThisItsTheOrderedAnswers.push({
        rowIndex: item.rowIndex,
        colIndex: item.colIndex,
        value: findAdjacentNumbers(convertedInput, item.rowIndex, item.colIndex),
      });
    }
  });
  const answer = needANameForThisItsTheOrderedAnswers.reduce((acc, curr) => {
    return acc + parseInt(curr.value.number);
  }, 0);

  return answer.valueOf();
};

// part 2
type gearLocation = { rowIndex: number; colIndex: number };

const searchAdjacentGear = (input: string[][], row: number, col: number): boolean => {
  const char = '*';
  let count = 0;
  // check left
  if (col > 0) {
    if (char.includes(input[row][col - 1])) {
      count++;
    }
  }
  // check right
  if (col < input[row].length - 1) {
    if (char.includes(input[row][col + 1])) {
      count++;
    }
  }
  // check up
  if (row > 0) {
    if (char.includes(input[row - 1][col])) {
      count++;
    }
  }
  // check down
  if (row < input.length - 1) {
    if (char.includes(input[row + 1][col])) {
      count++;
    }
  }
  // check up and left
  if (row > 0 && col > 0) {
    if (char.includes(input[row - 1][col - 1])) {
      count++;
    }
  }
  // check up and right
  if (row > 0 && col < input[row].length - 1) {
    if (char.includes(input[row - 1][col + 1])) {
      count++;
    }
  }
  // check down and left
  if (row < input.length - 1 && col > 0) {
    if (char.includes(input[row + 1][col - 1])) {
      count++;
    }
  }
  // check down and right
  if (row < input.length - 1 && col < input[row].length - 1) {
    if (char.includes(input[row + 1][col + 1])) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else return false;
};

const findGear = (input: string[][]) => {
  const gear = '*';
  const gearLocations = [];
  input.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === gear) {
        gearLocations.push({ rowIndex, colIndex });
      }
    });
  });
  return gearLocations;
};

// number of digits adjacent to a gear
const findAdjacentNumbersToGear = (input: string[][], gearLocations: gearLocation[]) => {
  const adjacentNumbersToGear = [];
  gearLocations.forEach((gear) => {
    adjacentNumbersToGear.push(findAdjacentNumbers(input, gear.rowIndex, gear.colIndex));
  });
  //   console.log(adjacentNumbersToGear[0]);
  return adjacentNumbersToGear;
};

// console.log(findGear(convertInput(example)));
// console.log(
//   findAdjacentNumbersToGear(
//     convertInput(example),
//     findGear(convertInput(example))
//   )
// );

// find "*" look for numbers adjacent to it
// if it has a number look for a scond number adjacent to the same "*"

export const part2 = (input: string): number => {
  const itemsWithSpecialCharAdjacent = [];
  const numbersAdjacentToGear = [];
  const convertedInput = convertInput(input);
  // for each item in the 2d array, check if it is adjacent to a *
  convertedInput.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (searchAdjacentGear(convertedInput, rowIndex, colIndex)) {
        if (convertedInput[rowIndex][colIndex].match(/\d/g)) {
          itemsWithSpecialCharAdjacent.push({
            rowIndex,
            colIndex,
            value: convertedInput[rowIndex][colIndex],
          });
        }
      }
    });
  });
  itemsWithSpecialCharAdjacent.forEach((item) => {
    // do not push if the item is already in numbersAdjacentToGear
    if (preventDuplicates(numbersAdjacentToGear, item)) {
      numbersAdjacentToGear.push({
        rowIndex: item.rowIndex,
        colIndex: item.colIndex,

        value: findAdjacentNumbers(convertedInput, item.rowIndex, item.colIndex),
      });
    }
  });
  //   console.log(numbersAdjacentToGear);
  //   console.log(numbersAdjacentToGear[0]);

  const answer = numbersAdjacentToGear.reduce((acc, curr) => {
    return acc + parseInt(curr.value.number);
  }, 0);

  return answer.valueOf();
};
