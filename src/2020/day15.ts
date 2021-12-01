export const example1: number[] = [0, 3, 6]
export const example2 = [1, 3, 2]
export const example3 = [2, 1, 3]
export const example4 = [1, 2, 3]

export const f = (startingNumbers: number[], loops: number) => {

    const lenOfStart = startingNumbers.length
    let spoken = []
    spoken = startingNumbers

    // const start = Date.now()

    for (let index = 0; index < loops - lenOfStart; index++) {
        const mostRecentlySpoken = spoken.pop()

        const doesArrayIncludeElement = spoken.includes(mostRecentlySpoken)

        if (!doesArrayIncludeElement) {
            spoken.push(mostRecentlySpoken)
            spoken.push(0)
        }
        if (doesArrayIncludeElement) {
            const currentTurnNumber = startingNumbers.length + 1
            const lastSpokenTurn = spoken.lastIndexOf(mostRecentlySpoken) + 1

            spoken.push(mostRecentlySpoken)
            spoken.push(currentTurnNumber - lastSpokenTurn)
        }
        // if (Date.now() > start + 120000) {
        //     break
        // }
    }

    // console.log({ spoken, 'numbersSpoken': spoken.length })
    return spoken.pop()
}

// solution from online - its fast
export const part1 = (numbers: number[], target: number = 2020) => {
    const idx = numbers.reduce((map, num, i) => map.set(num, i + 1), new Map());
    let turn = numbers.length + 1;
    let num = 0; // initial last number was unique for my input and test cases, so we will add 0 always
    let last;
    while (turn < target) {
        last = idx.get(num) || 0; // prev turn for num or 0 for unseen
        idx.set(num, turn); // set latest turn for num
        num = last && turn - last; // age if seen, else 0
        turn++; // next turn
    }
    return num;
};

export const part2 = numbers => part1(numbers, 30000000);
