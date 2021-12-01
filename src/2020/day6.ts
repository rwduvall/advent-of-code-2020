// export const unquieLetters = (questions: string) => {
//     var letters = []
//     for (let i of questions) {
//         letters.push(i)
//     }
//     let letterCounts = letters.reduce(function (accumulator, currentValue) {
//         if (accumulator.indexOf(currentValue) === -1) {
//             accumulator.push(currentValue)
//         }
//         return accumulator
//     }, [])

//     return letterCounts
// }

export const parseAnswers = (data: string): string[] => {
    const cleaned = []
    const allPassports = data.split("\n\n")
    for (let passport of allPassports) {
        cleaned.push(passport.replace(/\n/g, ""))
    }
    return cleaned
}

export const countForAll = (data: string[]) => {
    const count = data.map(function (questions) {
        var letters = []
        for (let i of questions) {
            letters.push(i)
        }
        let letterCounts = letters.reduce(function (accumulator, currentValue) {
            if (accumulator.indexOf(currentValue) === -1) {
                accumulator.push(currentValue)
            }
            return accumulator
        }, [])

        return letterCounts.length
    })

    // sum for each
    return count.reduce(function (a, b) { return a + b; })
}