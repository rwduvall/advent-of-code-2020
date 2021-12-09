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

type fishCount = {
  eightDay: number;
  sevenDay: number;
  sixDay: number;
  fiveDay: number;
  fourDay: number;
  threeDay: number;
  twoDay: number;
  oneDay: number;
  zeroDay: number;
};

export const useObj = (input: number[]): fishCount => {
  const o: fishCount = {
    eightDay: 0,
    sevenDay: 0,
    sixDay: 0,
    fiveDay: 0,
    fourDay: 0,
    threeDay: 0,
    twoDay: 0,
    oneDay: 0,
    zeroDay: 0
  };
  input.forEach(fish => {
    if (fish == 8) {
      o.eightDay++;
    }
    if (fish == 7) {
      o.sevenDay++;
    }
    if (fish == 6) {
      o.sixDay++;
    }
    if (fish == 5) {
      o.fiveDay++;
    }
    if (fish == 4) {
      o.fourDay++;
    }
    if (fish == 3) {
      o.threeDay++;
    }
    if (fish == 2) {
      o.twoDay++;
    }
    if (fish == 1) {
      o.oneDay++;
    }
    if (fish == 0) {
      o.zeroDay++;
    }
  });
  return o;
};

export const cycle = (days: number, input: fishCount): fishCount => {
  let fishAtEndOfDay: fishCount = {
    eightDay: 0,
    sevenDay: 0,
    sixDay: 0,
    fiveDay: 0,
    fourDay: 0,
    threeDay: 0,
    twoDay: 0,
    oneDay: 0,
    zeroDay: 0
  };
  fishAtEndOfDay.eightDay = input.zeroDay;
  fishAtEndOfDay.sevenDay = input.eightDay;
  fishAtEndOfDay.sixDay = input.sevenDay + input.zeroDay;
  fishAtEndOfDay.fiveDay = input.sixDay;
  fishAtEndOfDay.fourDay = input.fiveDay;
  fishAtEndOfDay.threeDay = input.fourDay;
  fishAtEndOfDay.twoDay = input.threeDay;
  fishAtEndOfDay.oneDay = input.twoDay;
  fishAtEndOfDay.zeroDay = input.oneDay;
  return fishAtEndOfDay;
};

export const d = (days: number, fCount: fishCount) => {
  let r = fCount;
  for (let d = 0; d < days; d++) {
    r = cycle(1234, r);
  }
  
  return r.eightDay +
  r.sevenDay +
  r.sixDay +
  r.fiveDay +
  r.fourDay +
  r.threeDay +
  r.twoDay +
  r.oneDay +
  r.zeroDay;
};
