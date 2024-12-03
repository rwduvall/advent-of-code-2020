const day13Example = ['#.##..##.', '..#.##.#.', '##......#', '##......#', '..#.##.#.', '..##..##.', '#.#.##.#.']; //.map((line) => line.split(''));

/*
find the reflections
I can create a sting of chars in a column  and compare to next row

Questions:
how do I know to look for horizontal or vertical?

*/

function extractColumn(input: string[]): string[] {
  // Get the length of the first string to determine the number of columns
  const columnCount = input[0].length;

  // Create an array to store the columns
  const columns: string[] = [];

  // Iterate through each column
  for (let i = 0; i < columnCount; i++) {
    // Extract the character at index i from each row and join them
    const column = input.map((row) => row[i]).join('');
    columns.push(column);
  }

  return columns;
}

function findVerticalReflection(f: string[]) {
  // this col == next col
  let cols = extractColumn(f);
  console.log(cols);
  console.log(cols[4] == cols[5]);
}

/* -this creates columns not rows- I think this did work but row 1 and col one are the same
for (let colIndex = 0; colIndex < day13Example[0].length; colIndex++) {
  const c = [];
  for (let row = 0; row < day13Example.length; row++) {
    c.push(day13Example[row][colIndex]);
    //   console.log(f[row][colIndex]);
  }
  console.log(c);
  console.log('----');
}
*/

findVerticalReflection(day13Example);
