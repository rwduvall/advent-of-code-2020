export const parseAnswers = (data: string): string[] => {
    const cleaned = []
    const allPassports = data.split("\n\n")
    for (let passport of allPassports) {
        cleaned.push(passport.split(/\n/g))
    }
    return cleaned
}

export const asdf = (data: string[]) => {


    data.forEach(function (value) {
        console.log(value)

        // console.log(value.includes(value.indexOf(value)))
        // console.log(value.search('a'))
        for (let char of value) {
            const indexOfValue = value.indexOf(char)
            console.log(indexOfValue)
            // console.log(char)

        }
        // console.log(value.includes('a'))
    })
    // let letterCounts = data.reduce(function (accumulator, currentValue) {
    //     console.log(accumulator.indexOf(currentValue))
    //     if (accumulator.indexOf(currentValue) === -1) {
    //         accumulator.push(currentValue)
    //     }
    //     return accumulator
    // }, [])
    // return letterCounts
}