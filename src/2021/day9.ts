export const parse = (input: string): number[][] => {
  return input.split("\n").map(v => v.split("").map(str => parseInt(str)));
};

export const compareAdjPoints = (arr: number[][]) => {
  const result = [];
  arr.map((row, rowIndex) => {
    const isFirstRow = rowIndex == 0;
    const isLastRow = rowIndex == arr.length - 1;
    row.map((item, itemIndex) => {
      const isFirstItemInRow = itemIndex == 0;
      const isLastInRow = itemIndex == row.length - 1;
      if (isFirstItemInRow && isFirstRow) {
        const valueToRight = arr[rowIndex][itemIndex + 1] > item;
        const valueBelow = arr[rowIndex + 1][itemIndex] > item;
        // this is the first item in the row and its the first row
        if (valueToRight && valueBelow) {
          result.push(item);
        }
      } else if (isLastInRow) {
        if (isFirstRow) {
          //  left and below
          const valueToLeft = arr[rowIndex][itemIndex - 1] > item;
          const valueBelow = arr[rowIndex + 1][itemIndex] > item;
          if (valueToLeft && valueBelow) {
            result.push(item);
          }
        } else if (isLastRow) {
          // above and left
          const valueToLeft = arr[rowIndex][itemIndex - 1] > item;
          const valueAbove = arr[rowIndex - 1][itemIndex] > item;
          if (valueAbove && valueToLeft) {
            result.push(item);
          }
        } else {
          // above and left and below
          const valueBelow = arr[rowIndex + 1][itemIndex] > item;
          const valueAbove = arr[rowIndex - 1][itemIndex] > item;
          const valueToLeft = arr[rowIndex][itemIndex - 1] > item;
          if (valueAbove && valueBelow && valueToLeft) {
            result.push(item);
          }
        }
      } else if (isFirstRow) {
        const valueBelow = arr[rowIndex + 1][itemIndex] > item;
        const valueToLeft = arr[rowIndex][itemIndex - 1] > item;
        const valueToRight = arr[rowIndex][itemIndex + 1] > item;
        if (!isLastInRow && valueBelow && valueToLeft && valueToRight) {
          result.push(item);
        }
        if (itemIndex == row.length - 1 && valueBelow && valueToLeft) {
          result.push(item);
        }
      } else if (isFirstItemInRow && !isLastRow) {
        // this is the first item in the row so only need to look at the item above
        const valueToRight = arr[rowIndex][itemIndex + 1] > item;
        const valueAbove = arr[rowIndex - 1][itemIndex] > item;
        const valueBelow = arr[rowIndex + 1][itemIndex] > item;
        if (valueAbove && valueToRight && valueBelow) {
          result.push(item);
        }
      } else if (isLastRow) {
        const valueAbove = arr[rowIndex - 1][itemIndex] > item;
        const valueToLeft = arr[rowIndex][itemIndex - 1] > item;
        const valueToRight = arr[rowIndex][itemIndex + 1] > item;
        if (valueAbove && valueToLeft && valueToRight) {
          result.push(item);
        }
      } else {
        const valueAbove = arr[rowIndex - 1][itemIndex] > item;
        const valueToLeft = arr[rowIndex][itemIndex - 1] > item;
        const valueToRight = arr[rowIndex][itemIndex + 1] > item;
        const valueBelow = arr[rowIndex + 1][itemIndex] > item;

        if (valueAbove && valueToLeft && valueToRight && valueBelow) {
          // not first row and not first num so look above and left

          result.push(item);
        }
      }
    });
  });
  console.log(result);
  console.log(result.reduce((prev, curr) => curr + prev, result.length));

  return result.reduce((prev, curr) => curr + prev, result.length);
};

/*
{
  const comp = parsedInput.map((row, rowIndex, parsedArr) => {
    const checkWithInRow = row.map((v, index, arr) => {
      const isLastInRow = index + 1 > arr.length - 1;
      const isFirstInRow = index == 0;
      if (rowIndex ==0) {
        // check below
      }
      if (isLastInRow) {
        return {
          isPreviousGreater: v > arr[index - 1],
          isNextGreater: false,
          isAboveGreater: v > comp[rowIndex - 1][index],
          v
        };
      } else if (isFirstInRow) {
        return {
          isPreviousGreater: true,
          isNextGreater: v > arr[index + 1],
          isBelowGreater: v > comp[rowIndex + 1][index],
          v
        };
      } else if (isLastInRow) {
        // asd;
      } else {
        return {
          isPreviousGreater: v > arr[index - 1],
          isNextGreater: v > arr[index + 1],
          v
        };
      }
    });
    // console.log(checkWithInRow);


    const checkAbove = checkWithInRow.map((item, index, arr) => {
      //   console.log({ num: item.v, index, arr, rowIndex });
      const isFirstItem = index == 0;
      const isLastInRow = index + 1 > arr.length - 1;

      if (rowIndex == 0) {
        console.log(item);
        return { ...item, itemBelow: item < row[rowIndex + 1][index] };
      } else {
        return { ...item };
      }
    });
    
    // console.log(checkAbove);
    return checkAbove;

  });

  return comp;
};
*/
