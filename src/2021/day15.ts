import { stringSplitOnNewLineAndbyChar } from "./genericParser";

export const convertStartTo0 = (i: number[][]) => {
  return i.map(row => row.map(v => (v = 0)));
};

export const doTheMath = (riskLevels: number[][]) => {
  riskLevels.forEach((row, rowIndex) => {
    const isFirstRow = rowIndex == 0;
    row.forEach((value, numIndex) => {
      // need to change how I'm getting value so that it is in the right order and not going down the row

      const isFirstItemInRow = numIndex == 0;
      if (isFirstItemInRow && rowIndex == 0) {
        // this is the first item in the row and its the first row
        row[numIndex] = 0;
        // row[numIndex] = value;
      } else if (isFirstItemInRow) {
        // this is the first item in the row so only need to look at the item above
        const sum: number = riskLevels[rowIndex - 1][numIndex] + value;
        row[numIndex] = sum;
      } else if (isFirstRow) {
          
        row[numIndex] = value + row[numIndex - 1];
      } else {
        const valueAbove = riskLevels[rowIndex - 1][numIndex];
        const valueToLeft = riskLevels[rowIndex][numIndex - 1]
        const valueToRight = riskLevels[rowIndex][numIndex + 1]

        if (numIndex > 0) {
          // not first row and not first num so look above and left
        //   const valueToLeft = riskLevels[rowIndex][numIndex - 1];
          row[numIndex] =
            valueAbove < valueToLeft ? value + valueAbove : value + valueToLeft;
        }
      }
      riskLevels[rowIndex] = row;
    });
  });
  console.log(riskLevels);
  return riskLevels[riskLevels.length - 1][riskLevels[0].length - 1];

  /*
  return riskLevels.map((row, rowIndex, arr) => {
    const isFirstRow = rowIndex == 0;
    console.log({ row, arr });
    return row.map((value, numIndex, arr) => {
      // need to change how I'm getting value so that it is in the right order and not going down the row

      const isFirstItemInRow = numIndex == 0;
      if (numIndex == 0 && rowIndex == 0) {
        // this is the first item in the row and its the first row
        // so don't search left or up
        return value;
      } else if (isFirstItemInRow) {
        // add just above
        const sum: number = riskLevels[rowIndex - 1][numIndex] + value;
        console.log({
          sum,
          numIndex,
          rowIndex,
          vAbove: riskLevels[rowIndex - 1][numIndex],
          value
        });
        return sum;
      } else if (isFirstRow) {
        return value + row[numIndex - 1];
      } else {
        const valueAbove = riskLevels[rowIndex - 1][numIndex];

        if (numIndex > 0) {
          // not first row and not first num so look above and left
          const valueToLeft = riskLevels[rowIndex][numIndex - 1];
          return valueAbove < valueToLeft
            ? value + valueAbove
            : value + valueToLeft;
        }
      }
      console.log({ rowAfter: row });
    });
  });
  */
};
