export const parseDay7 = (data: string) => {
    const foo = []
    const bar = data.split('\n')
    bar.forEach(value => {
        value.split(' ').slice(0, 2).join(" ")
        const a = value.split(' ').slice(0, 2).join(" ")
        const b = value.split('contain').slice(1).join(' ')
        foo.push({ first: a, b })
    })
    return foo
}

export const contains = (data: string[]) => {
    const desiredBagColor = 'shiny gold'
    const allColors = []

    // figure out highest number of types of bags each can contain (4)
    // const arrOfNum = []

    // data.forEach(value => {
    //     const numOfbags = value.split('bags, ').length
    //     arrOfNum.push(numOfbags)

    // })
    // console.log(arrOfNum.sort().reverse()[0])

    // console.log(data.length)
    for (let step = 0; step < data.length; step++) {
        var change = [desiredBagColor]

        change.forEach(value => {

            const foo = lookForColor(value, data)

            foo.arr.forEach(value => {
                const splitString = value.split(' ').slice(0, 2).join(" ")
                change.push(splitString)
                allColors.push(splitString)
            })


        })
        // console.log(change)
    }



    // const containDesired = lookForColor(desiredBagColor, data)
    // console.log(containDesired.arr)

    // containDesired.arr.forEach(value => {
    //     const splitString = value.split(' ').slice(0, 2).join(" ")
    //     allColors.push(splitString)
    //     const secondGo = lookForColor(splitString, data)

    //     secondGo.arr.forEach(value => {
    //         const splitString = value.split(' ').slice(0, 2).join(" ")
    //         allColors.push(splitString)
    //         const third = lookForColor(splitString, data)
    //         third.arr.forEach(value => {
    //             const splitString = value.split(' ').slice(0, 2).join(" ")
    //             allColors.push(splitString)
    //             const fourth = lookForColor(splitString, data)
    //             fourth.arr.forEach(value => {
    //                 const splitString = value.split(' ').slice(0, 2).join(" ")
    //                 allColors.push(splitString)
    //                 const fith = lookForColor(splitString, data)
    //                 fith.arr.forEach(value => {
    //                     const splitString = value.split(' ').slice(0, 2).join(" ")
    //                     allColors.push(splitString)
    //                     const sixth = lookForColor(splitString, data)
    //                     sixth.arr.forEach(value => {
    //                         const splitString = value.split(' ').slice(0, 2).join(" ")
    //                         allColors.push(splitString)
    //                         const sev = lookForColor(splitString, data)
    //                         sev.arr.forEach(value => {
    //                             const splitString = value.split(' ').slice(0, 2).join(" ")
    //                             allColors.push(splitString)
    //                             const eight = lookForColor(splitString, data)
    //                             eight.arr.forEach(value => {
    //                                 const splitString = value.split(' ').slice(0, 2).join(" ")
    //                                 allColors.push(splitString)
    //                                 const nine = lookForColor(splitString, data)
    //                                 nine.arr.forEach(value => {
    //                                     const splitString = value.split(' ').slice(0, 2).join(" ")
    //                                     allColors.push(splitString)
    //                                     const ten = lookForColor(splitString, data)
    //                                     ten.arr.forEach(value => {
    //                                         const splitString = value.split(' ').slice(0, 2).join(" ")
    //                                         allColors.push(splitString)
    //                                         const elevn = lookForColor(splitString, data)
    //                                         elevn.arr.forEach(value => {
    //                                             const splitString = value.split(' ').slice(0, 2).join(" ")
    //                                             allColors.push(splitString)
    //                                         })
    //                                     })
    //                                 })
    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })



    // const containDesired = lookForColor(desiredBagColor, data)
    // console.log(containDesired.arr)

    // containDesired.arr.forEach(value => {
    //     const splitString = value.split(' ').slice(0, 2).join(" ")
    //     allColors.push(splitString)
    //     const secondGo = lookForColor(splitString, data)

    //     secondGo.arr.forEach(value => {
    //         const splitString = value.split(' ').slice(0, 2).join(" ")
    //         allColors.push(splitString)
    //     })


    // })

    // console.log(containDesired.arr)
    // remove duplicates
    let uniqueChars = allColors.filter((c, index) => {
        return allColors.indexOf(c) === index;
    })
    // console.log(uniqueChars)

    return uniqueChars.length

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
        // console.log(value.includes('shiny gold'))
    })
    return { arr: canHoldDesiredColor, num: numberOfBagsThatHoldDesired }
}