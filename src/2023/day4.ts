type Card = {
  number: number;
  left: number[];
  right: number[];
};

export const example = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

// Part 1:

// convert example data to fit Card type
export const convertInput = (input: string): Card[] => {
  const parsedInput: Card[] = input.split('\n').map((card) => {
    const cardNumber = parseInt(card.split(':')[0].split(' ')[1]);
    const numbers = card.split(':')[1].split('|');
    const left = numbers[0]
      .replace('  ', ' ')
      .split(' ')
      .slice(1)
      .map((n) => parseInt(n))
      .filter((n) => !Number.isNaN(n));
    const right = numbers[1]
      .split(' ')
      .slice(1)
      .map((n) => parseInt(n))
      .filter((n) => !Number.isNaN(n));

    return { number: cardNumber, left, right };
  });
  return parsedInput;
};

export const numberOfWinningNumbersInCard = (card: Card): number => {
  const winningNumbers = card.left;
  const winners = [];
  card.right.forEach((number) => {
    if (card.left.includes(number)) {
      winners.push(number);
    }
  });

  if (winners.length === 0) {
    return 0;
  } else if (winners.length === 1) {
    return 1;
  }
  var points = 1;
  for (let i = 1; i < winners.length; i++) {
    points = points * 2;
  }
  return points;
};

export const part1 = (input: string): number => {
  const cards = convertInput(input);
  let total = 0;
  cards.forEach((card) => {
    total += numberOfWinningNumbersInCard(card);
  });
  return total;
};

// Part 2:
type CardResults = {
  card: Card;
  points: number;
};

type Card2 = {
  number: number;
  left: number[];
  right: number[];
  copies: number;
};

export const convertInput2 = (input: string): Card2[] => {
  const parsedInput: Card2[] = input.split('\n').map((card) => {
    const cardNumber = parseInt(card.split(':')[0].split(' ')[1]);
    const numbers = card.split(':')[1].split('|');
    const left = numbers[0]
      .replace('  ', ' ')
      .split(' ')
      .slice(1)
      .map((n) => parseInt(n))
      .filter((n) => !Number.isNaN(n));
    const right = numbers[1]
      .split(' ')
      .slice(1)
      .map((n) => parseInt(n))
      .filter((n) => !Number.isNaN(n));

    return { number: cardNumber, left, right, copies: 1 };
  });
  return parsedInput;
};

export const isCardWinner = (card: Card): CardResults => {
  const winningNumbers = card.left;
  const winners = [];
  card.right.forEach((number) => {
    if (card.left.includes(number)) {
      winners.push(number);
    }
  });

  return { card, points: winners.length };
};

// this works but is VERY slow
export const part2 = (input: string): number => {
  const cards: Card2[] = convertInput2(input);
  cards.forEach((card, index) => {
    for (let i = 0; i < card.copies; i++) {
      if (isCardWinner(card).points > 0) {
        for (let i = 1; i < isCardWinner(card).points + 1; i++) {
          cards[index + i].copies = cards[index + i].copies += 1;
        }
      }
    }
  });

  return cards.reduce((acc, card) => {
    return acc + card.copies;
  }, 0);
};
