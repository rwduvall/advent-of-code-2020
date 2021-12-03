export const getCount = (index: number, input: string[]) => {
  let numberOf1s = 0;
  input.forEach(value => {
    +value[index] == 1 ? numberOf1s++ : 0;
  });
  return numberOf1s;
};

export const parse = (puzzleInput: string) => {
  let result: string = "";
  const arr = puzzleInput.split("\n");
  const countOfItems = arr.length;

  for (let i = 0; i < arr[0].length; i++) {
    const f = getCount(i, arr);
    if (f > countOfItems / 2) {
      result += "1";
    } else {
      result += 0;
    }
  }
  return parseInt(result, 2);
};
