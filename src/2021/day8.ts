export const day8Part1 = (puzzleInput: string) => {
  return puzzleInput
    .split("\n")
    .map(v =>
      v
        .split(" | ")[1]
        .split(" ")
        .filter(
          v => v.length == 2 || v.length == 4 || v.length == 3 || v.length == 7
        )
    )
    .flat().length;
};

export const day8Part2 = (puzzleInput: string) => {
  const parse = puzzleInput.split("\n").map(v => v.split(" | "));
  const input = parse.map(row => row[0].split(" "));
  const code = input.map(row =>
    decodeInput(row.sort((a, b) => a.length - b.length))
  );

  return parse.map((row, index) => {
    const r = row[1].split(" ");
    return useCypherTofindNumbers(
      r,
      code[index].three,
      code[index].four,
      code[index].five,
      code[index].seven
    );
  });
};

const decodeInput = (scrabledInput: string[]) => {
  /*
  0:      1:      2:      3:      4:
 aaaa    ....    aaaa    aaaa    ....
b    c  .    c  .    c  .    c  b    c
b    c  .    c  .    c  .    c  b    c
 ....    ....    dddd    dddd    dddd
e    f  .    f  e    .  .    f  .    f
e    f  .    f  e    .  .    f  .    f
 gggg    ....    gggg    gggg    ....

  5:      6:      7:      8:      9:
 aaaa    aaaa    aaaa    aaaa    aaaa
b    .  b    .  .    c  b    c  b    c
b    .  b    .  .    c  b    c  b    c
 dddd    dddd    ....    dddd    dddd
.    f  e    f  .    f  e    f  .    f
.    f  e    f  .    f  e    f  .    f
 gggg    gggg    ....    gggg    gggg

 dddd
e    a
e    a
 ffff
g    b
g    b
 cccc

   d
e|f  a|b
   e|f
c|g  a|b
   c|g

positions
  1
2   3
  4
5   6
  7

// 1 length = 2
// 4 length = 4
// 7 length = 3
// 8 length = 7
    */

  let one = ["a", "b", "c", "d", "e", "f", "g"]; //'a'
  let two = ["a", "b", "c", "d", "e", "f", "g"]; //'b'
  let three = ["a", "b", "c", "d", "e", "f", "g"]; //'c'
  let four = ["a", "b", "c", "d", "e", "f", "g"]; //'d'
  let five = ["a", "b", "c", "d", "e", "f", "g"]; //'e'
  let six = ["a", "b", "c", "d", "e", "f", "g"]; //'f'
  let seven = ["a", "b", "c", "d", "e", "f", "g"]; //'g'

  // do the filtering
  for (let num of scrabledInput) {
    if (num.length == 2) {
      // number is 1
      three = three.filter(letter => letter == num[0] || letter == num[1]);
      six = six.filter(letter => letter == num[0] || letter == num[1]);
      // I can also remove these from all other items
      one = one.filter(l => l != three[0] && l != three[1]);
      two = two.filter(l => l != three[0] && l != three[1]);
      four = four.filter(l => l != three[0] && l != three[1]);
      five = five.filter(l => l != three[0] && l != three[1]);
      seven = seven.filter(l => l != three[0] && l != three[1]);
    } else if (num.length == 3) {
      // number is 7
      // if positions 3 and six only have 2 numbers I know what position one is
      if (three.length == 2) {
        one = one.filter(l => l != three[0] && l != three[1]);
      }
      if (six.length == 2) {
        one = one.filter(l => l != six[0] && l != six[1]);
      }

      // I know 1, 3, and 6 can only be the letters in num
      one = one.filter(
        letter => letter == num[0] || letter == num[1] || letter == num[2]
      );
      three = three.filter(
        letter => letter == num[0] || letter == num[1] || letter == num[2]
      );
      six = six.filter(
        letter => letter == num[0] || letter == num[1] || letter == num[2]
      );
      // I can also remove these from all other positions
      two = two.filter(l => l != num[0] && l != num[1] && l != num[2]);
      four = four.filter(l => l != num[0] && l != num[1] && l != num[2]);
      five = five.filter(l => l != num[0] && l != num[1] && l != num[2]);
      seven = seven.filter(l => l != num[0] && l != num[1] && l != num[2]);
    } else if (num.length == 4) {
      // number is 4
      two = two.filter(
        letter =>
          letter == num[0] ||
          letter == num[1] ||
          letter == num[2] ||
          letter == num[3]
      );
      three = three.filter(
        letter =>
          letter == num[0] ||
          letter == num[1] ||
          letter == num[2] ||
          letter == num[3]
      );
      four = four.filter(
        letter =>
          letter == num[0] ||
          letter == num[1] ||
          letter == num[2] ||
          letter == num[3]
      );
      six = six.filter(
        letter =>
          letter == num[0] ||
          letter == num[1] ||
          letter == num[2] ||
          letter == num[3]
      );

      // I can also remove these from all other positions
      one = one.filter(
        l => l != num[0] && l != num[1] && l != num[2] && l != num[3]
      );
      five = five.filter(
        l => l != num[0] && l != num[1] && l != num[2] && l != num[3]
      );
      seven = seven.filter(
        l => l != num[0] && l != num[1] && l != num[2] && l != num[3]
      );
    }

    if (one.length == 1) {
      two = two.filter(l => l != one[0]);
      three = three.filter(l => l != one[0]);
      four = four.filter(l => l != one[0]);
      five = five.filter(l => l != one[0]);
      six = six.filter(l => l != one[0]);
      seven = seven.filter(l => l != one[0]);
    }
    if (two.length == 1) {
      one = one.filter(l => l != two[0]);
      three = three.filter(l => l != two[0]);
      four = four.filter(l => l != two[0]);
      five = five.filter(l => l != two[0]);
      six = six.filter(l => l != two[0]);
      seven = seven.filter(l => l != two[0]);
    }
    if (three.length == 1) {
      one = one.filter(l => l != three[0]);
      two = two.filter(l => l != three[0]);
      four = four.filter(l => l != three[0]);
      five = five.filter(l => l != three[0]);
      six = six.filter(l => l != three[0]);
      seven = seven.filter(l => l != three[0]);
    }
    if (four.length == 1) {
      one = one.filter(l => l != four[0]);
      two = two.filter(l => l != four[0]);
      three = three.filter(l => l != four[0]);
      five = five.filter(l => l != four[0]);
      six = six.filter(l => l != four[0]);
      seven = seven.filter(l => l != four[0]);
    }
    if (five.length == 1) {
      one = one.filter(l => l != five[0]);
      two = two.filter(l => l != five[0]);
      three = three.filter(l => l != five[0]);
      four = four.filter(l => l != five[0]);
      six = six.filter(l => l != five[0]);
      seven = seven.filter(l => l != five[0]);
    }
    if (six.length == 1) {
      one = one.filter(l => l != six[0]);
      two = two.filter(l => l != six[0]);
      three = three.filter(l => l != six[0]);
      four = four.filter(l => l != six[0]);
      five = five.filter(l => l != six[0]);
      seven = seven.filter(l => l != six[0]);
    }
    if (seven.length == 1) {
      one = one.filter(l => l != seven[0]);
      two = two.filter(l => l != seven[0]);
      three = three.filter(l => l != seven[0]);
      four = four.filter(l => l != seven[0]);
      five = five.filter(l => l != seven[0]);
      six = six.filter(l => l != seven[0]);
    }
  }

  const decodedInput = useCypherTofindNumbers(
    scrabledInput,
    three,
    four,
    five,
    seven
  );
  return { one, two, three, four, five, six, seven, decodedInput };
};

const useCypherTofindNumbers = (
  input: string[],
  p3: string[],
  p4: string[],
  p5: string[],
  p7: string[]
) => {
  return input.map(num => {
    if (num.length == 2) {
      // number is 1
      return 1;
    } else if (num.length == 3) {
      // number is 7
      return 7;
    } else if (num.length == 4) {
      // number is 4
      return 4;
    } else if (num.length == 5) {
      // number is either 2 or 5 or 3
      if (num.includes(p3[0]) && num.includes(p3[1])) {
        return 3;
      } else if (num.includes(p7[0]) && num.includes(p7[1])) {
        return 2;
      } else {
        return 5;
      }
    } else if (num.length == 6) {
      // number is either 6 or 9 or 0
      if (!(num.includes(p4[0]) && num.includes(p4[1]))) {
        return 0;
      } else if (!(num.includes(p5[0]) && num.includes(p5[1]))) {
        return 9;
      } else if (!(num.includes(p3[0]) && num.includes(p3[1]))) {
        return 6;
      }
    } else if (num.length == 7) {
      // number is 8
      return 8;
    }
  });
};

export const sum = (answers: number[][]) => {
  return answers.reduce((prev, curr) => +curr.join("") + prev, 0);
};
