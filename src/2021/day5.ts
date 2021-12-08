export const parse = (input: string): number[][] => {
  return input.split("\n").map(linePoints => {
    const f = linePoints.replace(" -> ", ",").split(",");
    return f.map(points => parseInt(points));
  });
};

export const getLinePoints = (
  startX: number,
  startY: number,
  endX: number,
  endY: number
): [number, number][] => {
  let line: [number, number][] = [];

  if (
    (startX == endX && startY < endY) ||
    (startX == endX && startY > endY) ||
    (startX < endX && startY == endY) ||
    (startX > endX && startY == endY) ||
    (startX < endX && startY < endY) ||
    (startX > endX && startY < endY) ||
    (startX > endX && startY > endY) ||
    (startX < endX && startY > endY)
  ) {
    line.push([startX, startY]);
  }
  while (startX == endX && startY < endY) {
    startY++;
    line.push([startX, startY]);
  }
  while (startX == endX && startY > endY) {
    startY--;
    line.push([startX, startY]);
  }
  while (startX < endX && startY == endY) {
    startX++;
    line.push([startX, startY]);
  }
  while (startX > endX && startY == endY) {
    startX--;
    line.push([startX, startY]);
  }

  while (startX < endX && startY < endY) {
    startX++;
    startY++;
    line.push([startX, startY]);
  }
  while (startX > endX && startY < endY) {
    startX--;
    startY++;
    line.push([startX, startY]);
  }
  while (startX > endX && startY > endY) {
    startX--;
    startY--;
    line.push([startX, startY]);
  }
  while (startX < endX && startY > endY) {
    startX++;
    startY--;
    line.push([startX, startY]);
  }

  return line;
};

export const getLines = (linePoints: number[][]) => {
  const allPoints = [];
  linePoints.forEach(value => {
    const startX = value[0];
    const startY = value[1];
    const endX = value[2];
    const endY = value[3];

    allPoints.push(getLinePoints(startX, startY, endX, endY));
  });
  return allPoints;
};

type count = { id: string; count: number };

export const items = (points: [number, number][]) => {
  const counts: count[] = [];
  for (const point of points) {
    const exitingIndex = counts.findIndex(v => v.id == `${point}`);
    if (exitingIndex > -1) {
      counts[exitingIndex].count++;
    } else {
      counts.push({ id: `${point}`, count: 1 });
    }
  }
  console.log(counts);
  return counts.filter(item => item.count >= 2);
};

// this works but if VERY slow
