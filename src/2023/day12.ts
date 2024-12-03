// operational (.) or damaged (#) or unknown (?)
// ???.### 1,1,3

const exampleDay12 = `#.#.### 1,1,3
.#...#....###. 1,1,3
.#.###.#.###### 1,3,1,6
####.#...#... 4,1,1
#....######..#####. 1,6,5
.###.##....# 3,2,1`;

const day12WithQMarks = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`;

function doesRowPassGroupCheck(springRow: string, contiguousGroup: string) {
  // given x the first x must be must have x damaged springs in a row
  const springArray = springRow.split('');

  let spring = springArray[0];
  let lengthOfDamageSpringGroup = 0;
  let groupsOfDamagedSprings = [];
  //   while (spring != '#')
  for (let i = 0; i < springArray.length; i++) {
    let spring = springArray[i];
    if (spring == '#') {
      // spring is damaged so add to length of group
      lengthOfDamageSpringGroup += 1;
    }
    if (spring == '.') {
      groupsOfDamagedSprings.push(lengthOfDamageSpringGroup);
      lengthOfDamageSpringGroup = 0;
    }
  }
  groupsOfDamagedSprings.push(lengthOfDamageSpringGroup);

  const r = groupsOfDamagedSprings.filter((spring) => spring > 0).toString();

  // console.log({ r, contiguousGroup, pass: r === contiguousGroup });
  return r === contiguousGroup;
}

function generateCombinations(input: string): string[] {
  const combinations: string[] = [];
  console.log(combinations, input);

  function helper(s: string, i: number) {
    // If we've reached the end of the string, add it to the combinations array
    if (i === s.length) {
      // I think this is making it run for a long time
      if (doesRowPassGroupCheck(s, unfoldConditions('1,1,3'))) {
        combinations.push(s);
      }
      return;
    }

    // If the current character is '?', replace it with both '.' and '#'
    if (s[i] === '?') {
      helper(s.substr(0, i) + '.' + s.substr(i + 1), i + 1);
      helper(s.substr(0, i) + '#' + s.substr(i + 1), i + 1);
    } else {
      // If the current character is not '?', just move on to the next one
      helper(s, i + 1);
    }
  }

  helper(input, 0);

  return combinations;
}

function findNumOfArraignments(puzzleInput: string) {
  const countsOfPossibilities = [];
  puzzleInput
    .split('\n')
    .map((v) => v.split(' '))
    .forEach((row) => {
      let numOfPossible = 0;
      const possibleReplacementsOfQMark = generateCombinations(row[0]);
      // console.log(possibleReplacementsOfQMark);
      possibleReplacementsOfQMark.forEach((possibility) => {
        if (doesRowPassGroupCheck(possibility, row[1])) numOfPossible++;
      });
      countsOfPossibilities.push(numOfPossible);
    });
  // console.log(countsOfPossibilities);
  return countsOfPossibilities;
}

// console.log(unfoldSprings('.#') === '.#?.#?.#?.#?.#');
// console.log(unfoldConditions('1,1,3') === '1,1,3,1,1,3,1,1,3,1,1,3,1,1,3');

// console.log(findNumOfArraignments(puzzleInputDay12).reduce((pre, curr) => pre + curr, 0));

// exampleDay12
//   .split('\n')
//   .map((v) => v.split(' '))
//   .forEach((row) => {
//     doesRowPassGroupCheck(row[0], row[1]);
//   });

// let numOfPossible = 0;

// const pastabilties = generateCombinations('???.###');
// console.log(pastabilties);
// pastabilties.forEach((possibility) => {
//   if (doesRowPassGroupCheck(possibility, '1,1,3')) numOfPossible++;
// });
// console.log({ numOfPossible });

// /* not going to work, FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
function unfoldSprings(springs: string) {
  let newSprings = springs;
  for (let i = 0; i < 4; i++) {
    newSprings += '?' + springs;
  }
  return newSprings;
}

function unfoldConditions(instructions: string) {
  let newSprings = instructions;
  for (let i = 0; i < 4; i++) {
    newSprings += ',' + instructions;
  }
  return newSprings;
}

function findNumOfArraignmentsPart2(puzzleInput: string) {
  const countsOfPossibilities = [];
  puzzleInput
    .split('\n')
    .map((v) => v.split(' '))
    .forEach((row) => {
      let numOfPossible = 0;
      console.log({ numOfPossible });
      const possibleReplacementsOfQMark = generateCombinations(unfoldSprings(row[0]));
      console.log(possibleReplacementsOfQMark, possibleReplacementsOfQMark.length);
      // possibleReplacementsOfQMark.forEach((possibility) => {
      //   if (doesRowPassGroupCheck(possibility, unfoldConditions(row[1]))) numOfPossible++;
      // });
      countsOfPossibilities.push(numOfPossible);
    });
  return countsOfPossibilities;
}

console.log(findNumOfArraignmentsPart2(day12WithQMarks).reduce((pre, curr) => pre + curr, 0));
