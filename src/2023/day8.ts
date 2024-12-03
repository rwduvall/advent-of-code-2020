function travelPath(instructions: string, nodes: string): number {
  let lines = nodes.split('\n').map((v) => {
    const l = v.replace('(', '').replace(')', '').split(' = ');
    const instruc = l[1].split(', ');
    return {
      node: l[0],
      left: instruc[0],
      right: instruc[1],
    };
  });

  let location = 'AAA';
  let steps = 0;

  while (location != 'ZZZ') {
    if (instructions.length <= steps) instructions += instructions;
    let rOrL = instructions.charAt(steps);

    steps += 1;
    let curr = lines.find((v) => {
      return v.node == location;
    });

    if (rOrL == 'R') location = curr.right;
    if (rOrL == 'L') location = curr.left;
  }

  return steps;
}

let nodes = `AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

let example2 = `AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

// PART 2

function travel(
  instruction: string,
  lines: { node: string; left: string; right: string }[],
  location: { node: string; left: string; right: string }
): { node: string; left: string; right: string } {
  let temp;

  if (instruction == 'R') temp = location.right;
  if (instruction == 'L') temp = location.left;

  return lines.find((v) => v.node == temp);
}

function travelPath2(instructions: string, nodes: string): number {
  let lines = nodes.split('\n').map((v) => {
    const l = v.replace('(', '').replace(')', '').split(' = ');
    const instruc = l[1].split(', ');
    return {
      node: l[0],
      left: instruc[0],
      right: instruc[1],
    };
  });

  let locations = lines.filter((v) => v.node.match('..A'));

  let steps = 0;
  let atLeastOneItemDoesNotEndInZ = true;

  while (atLeastOneItemDoesNotEndInZ) {
    //   for (let i = 0; i < 3; i++) {
    let rOrL = instructions.charAt(steps % instructions.length);
    locations = locations.map((v) => travel(rOrL, lines, v));
    steps += 1;
    atLeastOneItemDoesNotEndInZ = locations.map((v) => v.node.match('..Z')).includes(null);

    if (steps % 10000 == 0) console.log(steps);
  }

  return steps;
}

function part2LCMArray(instructions: string, nodes: string) {
  let lines = nodes.split('\n').map((v) => {
    const l = v.replace('(', '').replace(')', '').split(' = ');
    const instruc = l[1].split(', ');
    return {
      node: l[0],
      left: instruc[0],
      right: instruc[1],
    };
  });

  let locations = lines.filter((v) => v.node.match('..A'));

  return locations.map((v) => {
    let location = v.node;
    let steps = 0;
    while (!location.match('..Z')) {
      if (instructions.length <= steps) instructions += instructions;
      let rOrL = instructions.charAt(steps);

      steps += 1;
      let curr = lines.find((v) => {
        return v.node == location;
      });

      if (rOrL == 'R') location = curr.right;
      if (rOrL == 'L') location = curr.left;
    }

    return steps;
  });
}

const part2Example = `11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`;

// console.log(travelPath2("LR", part2Example));
// console.log(part2LCMArray(part2i, part2));
