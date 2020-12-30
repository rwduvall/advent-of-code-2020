export const parseAnswers = (data: string): string[] => {
    const cleaned = []
    const allPassports = data.split("\n\n")
    for (let passport of allPassports) {
        const splitStr = passport.split(/\n/g)
        const b = []
        splitStr.forEach(person => {
            // const a = { person }
            // b.push(person)
            b.push(person)
        })
        // cleaned.push({ ...b })
        cleaned.push(b)
    }
    return cleaned
}

// ['a', 'a', 'cb', 'ba', 'abc']

export const asdf = (data: string[]) => {

    // data.forEach(v => {
    var count = 0
    var i;
    for (i = 0; i < data.length; i++) {
        console.log[data[0]]
        // const bar = v.indexOf(v[i])
        // console.log(bar)
        // if (bar >= 0) {
        //     count += 1
        // }
    }

    console.log(count)

    // const foo = v.indexOf(v[0])

    // console.log(foo)
    // })
}