export const so = (values: number[]) => {
  //   const avg = values.reduce((prev, curr) => prev + curr, 0) / values.length;
  //   const middle = avg < values.length / 2 - 1 ? Math.floor(avg) : Math.ceil(avg);
  //   console.log({ avg, middle });


  //   const counts = {};
  //   const foo = puzzleInput.sort((a, b) => a - b);
  //   for (const x of foo) {
  //     counts[x] = counts[x] ? counts[x] + 1 : 1;
  //   }
  //   console.log(counts);
  //   return puzzleInput.sort((a, b) => a - b);
};
export const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
