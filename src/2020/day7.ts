export const parseDay7 = (data: string) => {
    const foo = []
    const bar = data.split('\n')
    bar.forEach(value => {
        value.split(' ').slice(0, 2).join(" ")
        const a = value.split(' ').slice(0, 2).join(" ")
        const b = value.split(',').slice(3) //.join(' ')
        // if (b == ' no other bags.') {

        // }
        foo.push({ first: a, b })
    })
    console.log(foo)
    return foo
}

// could try
// do {
//     const before = 0
//     const foo = lookForColor()
//     after 
// } while (after > before)


export const contains = (data: string[]) => {
    const desiredBagColor = 'shiny gold'
    const allColors = []

}

export const lookForColor = (color: string, arr: string[]) => {
    const canHoldDesiredColor = []
    var numberOfBagsThatHoldDesired = 0
    arr.forEach(value => {
        const ruleWithOutfirstColor = value.split(' ').slice(3).join(' ')


        if (ruleWithOutfirstColor.includes(color)) {
            const splitString = value.split(' ').slice(0, 2).join(" ")
            canHoldDesiredColor.push(value)

            numberOfBagsThatHoldDesired += 1
        }

    })
    return { arr: canHoldDesiredColor, num: numberOfBagsThatHoldDesired }
}