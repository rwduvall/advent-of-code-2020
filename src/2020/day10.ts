export const parse = (input: string): number[] => {
    const bar = []
    input.split("\n").forEach(value => {
        bar.push(parseInt(value))
    })
    return bar
}

function compareValues(a, b) {
    return a - b
}

export const figureOutOrder = (chargers: number[]): number[] => {
    let finalOrder = []
    chargers.forEach(value => {
        const indexOfValue = chargers.indexOf(value)
        if (value) {

        }
    })
    // chargers.map(value => {
    //     value 
    // })

    // console.log(chargers.sort(compareValues))

    return chargers.sort(compareValues)
}

// finalOrder = []
// if B is less than or equal to A {
//     finalOrder.push(B)
// }

