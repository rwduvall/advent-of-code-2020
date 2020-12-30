// export const foo = (data: string) => {
//     const bar = []
//     data.split("\n").forEach(value => {
//         // console.log(parseInt(value))
//         bar.push(parseInt(value))
//     })
//     console.log(0 > -1)
//     return bar.indexOf(1)
// }

export const parse = (data: string): number[] => {
    const bar = []
    data.split("\n").forEach(value => {
        bar.push(parseInt(value))
    })
    return bar
}

// export const foo = (data: string) => {
//     const bar = []
//     data.split("\n").forEach(value => {
//         bar.push(parseInt(value))
//     })

//     const preambleLeng = 3
//     var finalAnswer: number

//     var killSwitch = 0

//     var cantFindANumberThatAddsUp: boolean
//     var found: boolean = false
//     var startOfPreable: number = 0

//     // console.log('index: ' + (startOfPreable + preambleLeng))

//     do {

//         const preamble: number[] = bar.slice(startOfPreable, preambleLeng + startOfPreable)
//         const numAfterPreable = bar[startOfPreable + preambleLeng]

//         console.log(numAfterPreable)
//         console.log(preamble)

//         // look in the preable for a number t


//         // this doesn't work

//         // preamble.forEach(value => {
//         //     const lookFor = numAfterPreable - value
//         //     // console.log('num after: ' + numAfterPreable)
//         //     // console.log('val: ' + value)
//         //     // console.log(lookFor)
//         //     const foo = preamble.indexOf(value)
//         //     if (foo > -1) {
//         //         cantFindANumberThatAddsUp = false
//         //     } if (foo == -1) {
//         //         cantFindANumberThatAddsUp = true
//         //     }

//         // })







//         startOfPreable += 1
//         if (cantFindANumberThatAddsUp) {
//             finalAnswer = numAfterPreable
//         }

//         killSwitch += 1
//     } while (cantFindANumberThatAddsUp == true || killSwitch < bar.length - preambleLeng) //(killSwitch < 4) // keep looking until you find one that doesnt work

//     // console.log(cantFind)
//     console.log('final: ' + finalAnswer)

//     return finalAnswer
// }





export const foo = (data: string) => {

    const preableLength = 25
    let startOfPreable = 0
    let noNumbersInPreambleAddUp: boolean //= false
    let anserToThePuzzle: number
    const fullDataSet = parse(data)

    let killSwitch = 0

    do {
        // math on each number in the preable to see if it adds up

        const preamble: number[] = fullDataSet.slice(startOfPreable, preableLength + startOfPreable)
        const numAfterPreamble = fullDataSet[startOfPreable + preableLength]
        // preamble[0]
        // console.log(preamble)
        // noNumbersInPreambleAddUp = true

        const resultsOfAllPreambleTests = []

        preamble.forEach(value => {
            const indexOfValue = preamble.indexOf(value)
            console.log(preamble[indexOfValue + 1])



            const lookFor = numAfterPreamble - value



            // console.log({ lookFor })
            resultsOfAllPreambleTests.push(preamble.includes(lookFor))
        })


        if (!resultsOfAllPreambleTests.includes(true)) {
            noNumbersInPreambleAddUp = true
            anserToThePuzzle = numAfterPreamble
        } else {
            noNumbersInPreambleAddUp = false
        }

        startOfPreable += 1

        killSwitch += 1

    } while ((noNumbersInPreambleAddUp != true)) // (killSwitch < 3) // (killSwitch < 3) || 

    console.log("answer: " + anserToThePuzzle)
    return anserToThePuzzle
}

export const part2 = (data: number[], total: number) => {
    let answer = []

    let index = 0
    let incramentalTotal = 0
    let tries = 0
    while ((incramentalTotal != total) || tries > data.length) {
        answer.push(data[index])
        index += 1
        incramentalTotal = answer.reduce((accumulator, currentValue) => accumulator + currentValue,
            0)
        if (answer.length == data.length) {
            answer = []
            tries += 1
            index = tries
        }
    }

    console.log(tries)

    console.log(answer.sort())
    return answer.reduce((accumulator, currentValue) => accumulator + currentValue,
        0)
}
