// A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2
export const example = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

type Card =
  | "A"
  | "K"
  | "Q"
  | "J"
  | "T"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";

export type Hand = [Card, Card, Card, Card, Card];

export const isHand5OfAKind = (hand: Hand) => {
  const [card1, card2, card3, card4, card5] = hand;
  return (
    card1 === card2 && card2 === card3 && card3 === card4 && card4 === card5
  );
};

export const isHand4OfAKind = (hand: Hand) => {
  if (isHand5OfAKind(hand)) {
    return false;
  }
  const [card1, card2, card3, card4, card5] = hand.sort();

  return (
    (card1 === card2 && card2 === card3 && card3 === card4) ||
    (card2 === card3 && card3 === card4 && card4 === card5)
  );
};

// "A", "A", "A", "2", "2" should return true
// "A", "A", "2", "2", "3" should return false
export const isHandFullHouse = (hand: Hand) => {
  if (isHand5OfAKind(hand) || isHand4OfAKind(hand)) {
    return false;
  }
  if (isHand3OfAKind(hand)) {
  }
};

export const isHand3OfAKind = (hand: Hand) => {
  if (isHand4OfAKind(hand) || isHand5OfAKind(hand)) {
    return false;
  }
  const [card1, card2, card3, card4, card5] = hand.sort();
  return (
    (card1 === card2 && card2 === card3) ||
    (card2 === card3 && card3 === card4) ||
    (card3 === card4 && card4 === card5)
  );
};

export const isHand2Pair = (hand: Hand) => {
  if (isHand3OfAKind(hand) || isHand4OfAKind(hand) || isHand5OfAKind(hand)) {
    return false;
  }
  const [card1, card2, card3, card4, card5] = hand.sort();
  return (
    (card1 === card2 && card3 === card4) ||
    (card2 === card3 && card4 === card5) ||
    (card1 === card2 && card4 === card5)
  );
};

const isHand1Pair = (hand: Hand) => {
  if (
    isHand2Pair(hand) ||
    isHand3OfAKind(hand) ||
    isHand4OfAKind(hand) ||
    isHand5OfAKind(hand)
  ) {
    return false;
  }
  const [card1, card2, card3, card4, card5] = hand.sort();
  return (
    card1 === card2 || card2 === card3 || card3 === card4 || card4 === card5
  );
};

export const isHandHighCard = (hand: Hand) => {
  if (
    isHand2Pair(hand) ||
    isHand3OfAKind(hand) ||
    isHand4OfAKind(hand) ||
    isHand5OfAKind(hand)
  ) {
    return false;
  }
  return true;
};

export const determineHandType = (hand: Hand) => {
  if (isHand5OfAKind(hand)) {
    return "5 of a kind";
  }
  if (isHand4OfAKind(hand)) {
    return "4 of a kind";
  }
  if (isHandFullHouse(hand)) {
    return "full house";
  }
  if (isHand3OfAKind(hand)) {
    return "3 of a kind";
  }
  if (isHand2Pair(hand)) {
    return "2 pair";
  }
  if (isHand1Pair(hand)) {
    return "1 pair";
  }
  if (isHandHighCard(hand)) {
    return "high card";
  }
};

export const convertCardToNumber = (card: Card) => {
  switch (card) {
    case "A":
      return 14;
    case "K":
      return 13;
    case "Q":
      return 12;
    case "J":
      return 11;
    case "T":
      return 10;
    default:
      return parseInt(card);
  }
};
