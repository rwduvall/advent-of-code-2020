export const parse = (input: boolean[][]) => {
    let result: string = ''
    input.forEach(row => {
        let rowString: string = ''
        row.forEach(bool => {
            if (bool == true) {
                // console.log('#')
                rowString = rowString + '#'
            }
            if (bool == false) {
                rowString = rowString + 'L'
            }
            if (bool == null) {
                rowString = rowString + '.'
            }
        })
        result = result.concat(rowString, '\n')

    })
    return result
}

export const seatStatusesConveredToBooleans = (seats: string): boolean[][] => {
    const rows: string[] = []
    const seatOccupied = []
    seats.split("\n").forEach(row => {
        rows.push(row)
    })
    rows.forEach(value => {
        const convertedRow = []
        value.split('').forEach(seat => {
            if (seat == 'L') {
                convertedRow.push(false)
            }
            if (seat == '#') {
                convertedRow.push(true)
            }
            if (seat == '.') {
                convertedRow.push(null)
            }
        })
        seatOccupied.push(convertedRow)
    })
    return seatOccupied
}

export const changeSeats = (currentOccupiedSeats: boolean[][]) => { //: boolean[][] => {
    // export const changeSeats = (currentOccupiedSeats) => {
    const newSeatStatuses = []
    currentOccupiedSeats.forEach(function (row, indexOfRow) {
        const newRow = []
        row.forEach(function (seat, indexOfSeat) {

            // if (seat != null) {
            const surroundingSeats: boolean[] = []
            const rowBelow = currentOccupiedSeats[indexOfRow + 1]
            const rowAbove = currentOccupiedSeats[indexOfRow - 1]

            let seatAboveBefore
            let seatAbove
            let seatAboveAfter
            let seatBefore
            let seatAfter
            let seatBelowBefore
            let seatBelow
            let seatBelowAfter

            // get surrounding seats, set to unfefined if it doesn't exist
            try {
                seatAboveBefore = rowAbove[indexOfSeat - 1]
            } catch {
                seatAboveBefore = undefined
            }
            try {
                seatAbove = rowAbove[indexOfSeat]

            } catch {
                seatAbove = undefined
            }
            try {
                seatAboveAfter = rowAbove[indexOfSeat + 1]

            } catch {
                seatAboveAfter = undefined
            }
            try {
                seatBefore = row[indexOfSeat - 1]

            } catch {
                seatBefore = undefined
            }
            try {
                seatAfter = row[indexOfSeat + 1]

            } catch {
                seatAfter = undefined
            }
            try {
                seatBelowBefore = rowBelow[indexOfSeat - 1]

            } catch {
                seatBelowBefore = undefined
            }
            try {
                seatBelow = rowBelow[indexOfSeat]

            } catch {
                seatBelow = undefined
            }
            try {
                seatBelowAfter = rowBelow[indexOfSeat + 1]
            } catch {
                seatBelowAfter = undefined
            }

            surroundingSeats.push(seatAboveBefore, seatAbove, seatAboveAfter, seatBefore, seatAfter, seatBelowBefore, seatBelow, seatBelowAfter)


            const numberOfOccupiedsurroundingSeats = countOfOccupiedSeats(surroundingSeats, true)
            // console.log({ indexOfRow, indexOfSeat, 'seat': seat, 'surroundingSeatsArray': { seatAboveBefore, seatAbove, seatAboveAfter, seatBefore, seatAfter, seatBelowBefore, seatBelow, seatBelowAfter }, 'numOccSeats': numberOfOccupiedsurroundingSeats })

            // if seat is empty (L/false) and no surrounding seats are occupied it becomes occupied(#/true)
            const rule1 = (seat == false && numberOfOccupiedsurroundingSeats == 0)

            // if seat is occupied (#/true) and 4 or more surrounding seats are occupied it becomes empty(L/false)
            const rule2 = (seat == true && numberOfOccupiedsurroundingSeats >= 4)

            // if floor (null) stays floor
            const floor = (seat == null)

            // if others arent true stays the same
            const rule3 = (!rule1 && !rule2 && !floor)

            if (rule1) {
                newRow.push(true)

            } else if (rule2) {
                newRow.push(false)

            } else if (floor) {
                newRow.push(null)

            }
            else if (rule3) {
                newRow.push(seat)
            }

        })

        if (newRow.length != row.length) {
            throw `Row lenghts should match. Error on row wiht index ${indexOfRow}`;
        }
        newSeatStatuses.push(newRow)

    })

    return newSeatStatuses
}

export const countOfOccupiedSeats = function (arr: boolean[], val: boolean): number {
    return arr.reduce((acc, elem) => {
        return (val === elem ? acc + 1 : acc)
    }, 0)
}

export const loopUntilNoChange = (input: string) => {
    const initailConvesrtion = seatStatusesConveredToBooleans(input)
    let outCome = initailConvesrtion
    let finalAnswer
    let numberOfIterations = 0
    do {
        const afterChange = changeSeats(outCome)
        outCome = afterChange
        finalAnswer = afterChange
        numberOfIterations += 1
    } while (numberOfIterations < 500)//|| (typeof finalAnswer !== 'undefined'))

    let numberOfOccupiedSeats: number = 0
    finalAnswer.forEach(element => {
        numberOfOccupiedSeats += countOfOccupiedSeats(element, true)
    });


    return { numberOfOccupiedSeats, numberOfIterations }
}