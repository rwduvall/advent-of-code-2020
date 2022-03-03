export const stringSplitOnNewLineAndbyChar = (input: string): number[][] => {
  return input.split("\n").map(line => line.split("").map(Number));
};

export const splitOnNewLine = (input: string): string[] => {
  return input.split("\n");
};

export const compareAdjPoints = (arr: number[][]) => {
    arr.map((row, rowIndex) => {
      const isFirstRow = rowIndex == 0;
      const isLastRow = rowIndex == arr.length - 1;
      return row.map((item, itemIndex) => {
        const isFirstItemInRow = itemIndex == 0;
        const isLastInRow = itemIndex == row.length - 1;
        if (isFirstItemInRow && isFirstRow) {
          const valueToRight = arr[rowIndex][itemIndex + 1];
          const valueBelow = arr[rowIndex + 1][itemIndex];
          // this is the first item in the row and its the first row
          if (valueToRight && valueBelow) {
            // Do the thing
          }
        } else if (isLastInRow) {
          if (isFirstRow) {
            //  left and below
            const valueToLeft = arr[rowIndex][itemIndex - 1];
            const valueBelow = arr[rowIndex + 1][itemIndex];
            if (valueToLeft && valueBelow) {
              // Do the thing
            }
          } else if (isLastRow) {
            // above and left
            const valueToLeft = arr[rowIndex][itemIndex - 1];
            const valueAbove = arr[rowIndex - 1][itemIndex];
            if (valueAbove && valueToLeft) {
              // Do the thing
            }
          } else {
            // above and left and below
            const valueBelow = arr[rowIndex + 1][itemIndex];
            const valueAbove = arr[rowIndex - 1][itemIndex];
            const valueToLeft = arr[rowIndex][itemIndex - 1];
            if (valueAbove && valueBelow && valueToLeft) {
              // Do the thing
            }
          }
        } else if (isFirstRow) {
          const valueBelow = arr[rowIndex + 1][itemIndex];
          const valueToLeft = arr[rowIndex][itemIndex - 1];
          const valueToRight = arr[rowIndex][itemIndex + 1];
          if (!isLastInRow && valueBelow && valueToLeft && valueToRight) {
            // Do the thing
          }
          if (itemIndex == row.length - 1 && valueBelow && valueToLeft) {
            // Do the thing
          }
        } else if (isFirstItemInRow && !isLastRow) {
          // this is the first item in the row so only need to look at the item above
          const valueToRight = arr[rowIndex][itemIndex + 1];
          const valueAbove = arr[rowIndex - 1][itemIndex];
          const valueBelow = arr[rowIndex + 1][itemIndex];
          if (valueAbove && valueToRight && valueBelow) {
            // Do the thing
          }
        } else if (isLastRow) {
          const valueAbove = arr[rowIndex - 1][itemIndex];
          const valueToLeft = arr[rowIndex][itemIndex - 1];
          const valueToRight = arr[rowIndex][itemIndex + 1];
          if (valueAbove && valueToLeft && valueToRight) {
            // Do the thing
          }
        } else {
          const valueAbove = arr[rowIndex - 1][itemIndex];
          const valueToLeft = arr[rowIndex][itemIndex - 1];
          const valueToRight = arr[rowIndex][itemIndex + 1];
          const valueBelow = arr[rowIndex + 1][itemIndex];
  
          if (valueAbove && valueToLeft && valueToRight && valueBelow) {
            // not first row and not first num so look above and left
  
            // Do the thing
          }
        }
      });
    });
  
    return 'Done';
  };

export const adjacentItems = (arr: number[][]) => {
  arr.forEach((row, rowIndex) => {
    // this goes in order so:
    // first in first row
    // frist row
    // last item in first row
    // first item in row
    // last item in row OR
    // all the middle stuff - this and one above shouldn't matter
    // first in last row
    // last row
    // last in last row

    const isFirstRow = rowIndex == 0;
    row.forEach((item, itemIndex) => {
      const isFirstItemInRow = itemIndex == 0;
      if (isFirstItemInRow && rowIndex == 0) {
        // this is the first item in the row and its the first row
      } else if (isFirstItemInRow) {
        // this is the first item in the row so only need to look at the item above
      } else if (isFirstRow) {
        row[itemIndex] = item + row[itemIndex - 1];
      } else {
        const valueAbove = arr[rowIndex - 1][itemIndex];
        const valueToLeft = arr[rowIndex][itemIndex - 1];
        const valueToRight = arr[rowIndex][itemIndex + 1];
        const valueBelow = arr[rowIndex + 1][itemIndex];

        if (itemIndex > 0) {
          // not first row and not first num so look above and left

          row[itemIndex] = item;
        }
      }
      arr[rowIndex] = row;
    });
  });
  console.log(arr);
  return arr;
};
