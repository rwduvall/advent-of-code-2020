export const exampleDay1 = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

export const dayOne = (data: string) => {
  const elfs = data.split(/\n\n/).map((elf) => {
    const convertedToInt = elf.split(/\n/).map((i) => parseInt(i));
    const elfTotalCal = convertedToInt.reduce((acc, curr) => acc + curr, 0);
    return elfTotalCal;
  });
  const sortedElfs = elfs.sort((a, b) => b - a);

  return sortedElfs;
};

const dayOneOneLine = (data: string) => {
  return data
    .split(/\n\n/)
    .map((elf) => {
      return elf
        .split(/\n/)
        .map((i) => parseInt(i))
        .reduce((acc, curr) => acc + curr, 0);
    })
    .sort((a, b) => b - a);
};
