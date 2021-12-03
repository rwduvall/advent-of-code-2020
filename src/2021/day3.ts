export const getCount = (index: number, input: string[]): number => {
  let numberOf1s = 0;
  input.forEach(value => {
    +value[index] == 1 ? numberOf1s++ : 0;
  });
  return numberOf1s;
};

export const oxgyGen = (puzzleInput: string) => {
  let arr = puzzleInput.split("\n");

  for (let i = 0; i < arr[0].length; i++) {
    const countOfItems = arr.length;
    const numberOf1s = getCount(i, arr);
    if (numberOf1s >= countOfItems / 2) {
      arr = arr.filter(value => +value[i] == 1);
    } else {
      arr = arr.filter(value => +value[i] == 0);
    }
  }
  return parseInt(arr[0], 2);
};

export const o2Scrub = (puzzleInput: string) => {
  let arr = puzzleInput.split("\n");
  let i = 0;

  while (arr.length > 1) {
    const countOfItems = arr.length;
    const numberOf1s = getCount(i, arr);
    if (numberOf1s < countOfItems / 2) {
      arr = arr.filter(value => +value[i] == 1);
    } else {
      arr = arr.filter(value => +value[i] == 0);
    }
    i++;
  }

  return parseInt(arr[0], 2);
};
