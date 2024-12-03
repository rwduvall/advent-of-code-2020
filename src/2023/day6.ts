type RacePotential = {
  time: number;
  distance: number;
  holdTime: number;
  distanceTraveled: number;
};

type RaceInputs = {
  time: number;
  distance: number;
};

export const racePotentialRuns = (raceInputs: RaceInputs): RacePotential[] => {
  const racePotentials: RacePotential[] = [];
  for (let i = 0; i <= raceInputs.time; i++) {
    const timeAfterHold: number = raceInputs.time - i;
    const distanceAfterHold: number = timeAfterHold * i;
    const racePotential: RacePotential = {
      time: raceInputs.time,
      distance: raceInputs.distance,
      holdTime: i,
      distanceTraveled: distanceAfterHold,
    };
    racePotentials.push(racePotential);
  }
  return racePotentials;
};

export const numberOfPotentialsThatAreOverDistance = (racePotentialRuns: RacePotential[]): number => {
  return racePotentialRuns.filter((racePotential) => racePotential.distanceTraveled > racePotential.distance).length;
};
