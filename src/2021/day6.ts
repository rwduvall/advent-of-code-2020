export const afterDays = (days: number, input: number[]): number[] => {
  let fishAtEndOfTheDay = input;
  for (let d = 0; d < days; d++) {
    let numberOfBabies = 0;
    fishAtEndOfTheDay = fishAtEndOfTheDay.map(fish => {
      if (fish > 0) {
        return fish - 1;
      }
      if (fish == 0) {
        numberOfBabies++;
        return 6;
      }
    });
    for (let b = 0; b < numberOfBabies; b++) {
      fishAtEndOfTheDay.push(8);
    }
  }
  return fishAtEndOfTheDay;
};
