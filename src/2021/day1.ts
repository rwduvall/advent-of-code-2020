export const exampleDay1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

export const occurancesOfIncrease = (data: number[]): number => {
  const total = data.flatMap((currentValue, index, arr) => {
    if (arr[index - 1] == undefined) {
      return 0;
    } else if (currentValue > arr[index - 1]) {
      return 1;
    } else {
      return 0;
    }
  });
  return total.reduce((prev, curr) => prev + curr, 0);
};

export const part2SumArray = (data: number[]) => {
  return data
    .flatMap((currentValue, index, arr) => {
      if (!isNaN(arr[index + 2])) {
        const section = currentValue + arr[index + 1] + arr[index + 2];
        return section;
      }
    })
    .filter(Boolean); // filter out NaN values
};

export const part2 = (data: number[]) => {
  const reduced = part2SumArray(data);
  console.log(reduced.length);
  return occurancesOfIncrease(reduced);
};

