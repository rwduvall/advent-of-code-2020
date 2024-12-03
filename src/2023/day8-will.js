// // import fs from "fs";

// const file = `RL

// AAA = (BBB, CCC)
// BBB = (DDD, EEE)
// CCC = (ZZZ, GGG)
// DDD = (DDD, DDD)
// EEE = (EEE, EEE)
// GGG = (GGG, GGG)
// ZZZ = (ZZZ, ZZZ)`;

// // Parse file into graph and instruction set
// // const file = fs.readFileSync("./day-8.txt", "utf-8");
// const [instructionLine, networkLines] = file.split("\n\n");

// const graph = {};

// networkLines.split("\n").forEach((line) => {
//   const [_, node, left, right] = line.match(/^(\w+)\s=\s\((\w+),\s(\w+)\)$/);
//   graph[node] = { left, right };
// });

// console.log(networkLines);
// console.log(instructionLine);

// // Traverse the graph
// let steps = 0;
// let node = "AAA";

// while (node !== "ZZZ") {
//   const instructionIndex = steps % instructionLine.length;
//   const instruction = instructionLine[instructionIndex];

//   steps += 1;

//   if (instruction === "R") node = graph[node].right;
//   if (instruction === "L") node = graph[node].left;
// }

// console.log("Answer:", steps);

// Parse file into graph and instruction set
const file = fs.readFileSync(path.join(__dirname, './part-2.txt'), 'utf-8');
const [instructionLine, networkLines] = file.split('\n\n');

const graph = {};

networkLines.split('\n').forEach((line) => {
  const [_, node, left, right] = line.match(/^(\w+)\s=\s\((\w+),\s(\w+)\)$/);
  graph[node] = { left, right };
});

function getStepsForLoop(node, hasReachedEndFn) {
  let steps = 0;

  while (!hasReachedEndFn(node) || steps === 0) {
    const instructionIndex = steps % instructionLine.length;
    const instruction = instructionLine[instructionIndex];

    steps += 1;

    if (instruction === 'R') node = graph[node].right;
    if (instruction === 'L') node = graph[node].left;
  }

  return steps;
}

const startingNodes = Object.keys(graph).filter((n) => n.endsWith('A'));

const loopSizes = startingNodes.map((node) =>
  getStepsForLoop(node, (n) => n.endsWith('Z'))
);

console.log('Answer:', loopSizes);
