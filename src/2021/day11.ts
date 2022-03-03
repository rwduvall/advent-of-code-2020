// import { stringSplitOnNewLineAndbyChar } from "./genericParser";

// export const removeBadLines = (puzzleInput: string) => {
//   const parsedInput = stringSplitOnNewLineAndbyChar(puzzleInput);
//   return parsedInput.map((row, rowIndex) => {
//     return row.map((num, numIndex) => {
//       if (num == 9) {
//         // and increase the adjestent item
//         return 0;
//       }
//       num += 1;
//     });
//   });
//   // console.log(parsedInput);
// };

// export const compareAdjPoints = (
//   arr: number[][],
//   rowToSerchAround: number,
//   itemToSearchAround: number
// ) => {
//   const isFirstRow = rowToSerchAround == 0;
//   const isLastRow = rowToSerchAround == arr.length - 1;
//   const isFirstItemInRow = itemToSearchAround == 0;
//   const isLastInRow = itemToSearchAround == arr[0].length - 1;

//   // const valueToRight = arr[rowToSerchAround][itemToSearchAround + 1];
//   // const valueToLeft = arr[rowToSerchAround][itemToSearchAround - 1];
//   // const valueBelow = arr[rowToSerchAround + 1][itemToSearchAround];
//   // const valueAbove = arr[rowToSerchAround - 1][itemToSearchAround];

//   if (isFirstItemInRow && isFirstRow) {
//     const valueToRight = arr[rowToSerchAround][itemToSearchAround + 1];
//     const valueBelow = arr[rowToSerchAround + 1][itemToSearchAround];
//     const valueDownRight = arr[rowToSerchAround + 1][itemToSearchAround + 1];

//     // this is the first item in the row and its the first row
//   } else if (isLastInRow) {
//     if (isFirstRow) {
//       //  left and below
//       const valueToLeft = arr[rowToSerchAround][itemToSearchAround - 1];
//       const valueBelow = arr[rowToSerchAround + 1][itemToSearchAround];
//       const valueBelowLeft = arr[rowToSerchAround + 1][itemToSearchAround - 1];
//       if (valueToLeft && valueBelow) {
//         // Do the thing
//       }
//     } else if (isLastRow) {
//       // above and left
//       const valueToLeft = arr[rowToSerchAround][itemToSearchAround - 1];
//       const valueAbove = arr[rowToSerchAround - 1][itemToSearchAround];
//       const valueAboveLeft = arr[rowToSerchAround - 1][itemToSearchAround - 1];
//       if (valueAbove && valueToLeft) {
//         // Do the thing
//       }
//     } else {
//       // above and left and below
//       const valueBelow = arr[rowToSerchAround + 1][itemToSearchAround];
//       const valueBelowLeft = arr[rowToSerchAround + 1][itemToSearchAround - 1];
//       const valueAbove = arr[rowToSerchAround - 1][itemToSearchAround];
//       const valueAboveLeft = arr[rowToSerchAround - 1][itemToSearchAround - 1];
//       const valueToLeft = arr[rowToSerchAround][itemToSearchAround - 1];
//       if (valueAbove && valueBelow && valueToLeft) {
//         // Do the thing
//       }
//     }
//   } else if (isFirstRow) {
//     const valueBelow = arr[rowToSerchAround + 1][itemIndex];
//     const valueToLeft = arr[rowToSerchAround][itemIndex - 1];
//     const valueToRight = arr[rowToSerchAround][itemIndex + 1];
//     if (!isLastInRow && valueBelow && valueToLeft && valueToRight) {
//       // Do the thing
//     }
//     if (itemIndex == row.length - 1 && valueBelow && valueToLeft) {
//       // Do the thing
//     }
//   } else if (isFirstItemInRow && !isLastRow) {
//     // this is the first item in the row so only need to look at the item above
//     const valueToRight = arr[rowToSerchAround][itemIndex + 1];
//     const valueAbove = arr[rowToSerchAround - 1][itemIndex];
//     const valueBelow = arr[rowToSerchAround + 1][itemIndex];
//     if (valueAbove && valueToRight && valueBelow) {
//       // Do the thing
//     }
//   } else if (isLastRow) {
//     const valueAbove = arr[rowToSerchAround - 1][itemIndex];
//     const valueToLeft = arr[rowToSerchAround][itemIndex - 1];
//     const valueToRight = arr[rowToSerchAround][itemIndex + 1];
//     if (valueAbove && valueToLeft && valueToRight) {
//       // Do the thing
//     }
//   } else {
//     const valueAbove = arr[rowToSerchAround - 1][itemToSearchAround];
//     const valueToLeft = arr[rowToSerchAround][itemToSearchAround - 1];
//     const valueToRight = arr[rowToSerchAround][itemToSearchAround + 1];
//     const valueBelow = arr[rowToSerchAround + 1][itemToSearchAround];

//     if (valueAbove && valueToLeft && valueToRight && valueBelow) {
//       // not first row and not first num so look above and left
//       // Do the thing
//     }
//   }
// };

// const flash = (yPosition: number, xPosition: number, octopusesArray: number[][]): number[][] => {
//   const minX = 0
//   const maxX = octopusesArray[0].length
//   const minY = 0
//   const maxY = octopusesArray.length

//   let newY = yPosition
//   let newX = xPosition
//    if (yPosition - 1 > minY) {
//      newY = yPosition - 1
//    }

// }
