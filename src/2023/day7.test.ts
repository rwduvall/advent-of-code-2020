import { Hand, convertCardToNumber, determineHandType, isHand2Pair, isHand3OfAKind, isHand4OfAKind, isHand5OfAKind, isHandFullHouse } from './day7';

describe('day 7', () => {
  const fiveOfAKind: Hand = ['A', 'A', 'A', 'A', 'A'];
  const fourOfAKind: Hand = ['A', 'A', 'A', 'A', '2'];
  const fullHouse: Hand = ['A', 'A', 'A', '2', '2'];
  const threeOfAKind: Hand = ['A', 'A', 'A', '2', '3'];
  const twoPair: Hand = ['A', 'A', '2', '2', '3'];
  const onePair: Hand = ['A', 'A', '2', '3', '4'];
  const highCard: Hand = ['A', '2', '3', '4', '5'];
  const hands: Hand[] = [fiveOfAKind, fourOfAKind, fullHouse, threeOfAKind, twoPair, onePair, highCard];
  test('', () => {
    expect(convertCardToNumber('A')).toEqual(14);
    expect(convertCardToNumber('9')).toEqual(9);
  });
  test('hands', () => {
    expect(isHand5OfAKind(fiveOfAKind)).toBeTruthy();
    expect(isHand5OfAKind(fourOfAKind)).toBeFalsy();
    expect(isHand5OfAKind(fullHouse)).toBeFalsy();

    expect(isHand4OfAKind(fiveOfAKind)).toBeFalsy();
    expect(isHand4OfAKind(fourOfAKind)).toBeTruthy();
    const fourOfAKind2: Hand = ['2', 'A', 'A', 'A', 'A'];
    const fourOfAKind3: Hand = ['A', '2', 'A', 'A', 'A'];
    expect(isHand4OfAKind(fourOfAKind2)).toBeTruthy();
    expect(isHand4OfAKind(fourOfAKind3)).toBeTruthy();
    expect(isHand4OfAKind(threeOfAKind)).toBeFalsy();

    expect(isHandFullHouse(fiveOfAKind)).toBeFalsy();
    // expect(isHandFullHouse(fullHouse)).toBeTruthy();

    expect(isHand3OfAKind(fiveOfAKind)).toBeFalsy();
    expect(isHand3OfAKind(threeOfAKind)).toBeTruthy();
    expect(isHand3OfAKind(twoPair)).toBeFalsy();

    expect(isHand2Pair(fiveOfAKind)).toBeFalsy();
    expect(isHand2Pair(fullHouse)).toBeFalsy();
    expect(isHand2Pair(twoPair)).toBeTruthy();
  });

  test('', () => {
    expect(determineHandType(fiveOfAKind)).toEqual('5 of a kind');
    expect(determineHandType(fourOfAKind)).toEqual('4 of a kind');
    // expect(determineHandType(fullHouse)).toEqual("full house");
    expect(determineHandType(threeOfAKind)).toEqual('3 of a kind');
    expect(determineHandType(twoPair)).toEqual('2 pair');
    expect(determineHandType(onePair)).toEqual('1 pair');
  });
});
