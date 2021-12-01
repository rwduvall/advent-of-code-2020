export const findRow = (seatPosition: string) => {
    let rows = Array.from(Array(127).keys())
    for (let i of seatPosition) {
        if (i == 'F') {
            var startingPoint = rows.length / 2
            var numToDelete = rows.length / 2
            // if (startingPoint % 2) {
            //     console.log(Math.ceil(rows.length / 2))
            // }

            rows.splice(Math.ceil(rows.length / 2), startingPoint)

            // console.log(rows)
        } else if (i == 'B') {
            rows.splice(0, rows.length / 2)
            // console.log(rows)
        }
    }
    if (seatPosition.charAt(0) == 'B') {
        rows[0] += 1
    }
    // console.log(rows)
    return rows[0]
}

export const findColumn = (seatPosition: string) => {
    let columns = [0, 1, 2, 3, 4, 5, 6, 7]
    for (let i of seatPosition) {
        if (i == 'L') {
            // console.log("before L " + columns)
            columns.splice(columns.length / 2, columns.length / 2)
            // console.log("after L " + columns)
        } else if (i == 'R') {
            // console.log("before R " + columns)
            columns.splice(0, columns.length / 2)
            // console.log("after R " + columns)
        }
    }
    return columns[0]
}

export const getSeatID = (seatPosition: string) => {
    // console.log(findRow(seatPosition))
    return findRow(seatPosition) * 8 + findColumn(seatPosition)
}

export const getHighestSeatId = (seatPositions: string[]) => {
    const seatIds = []
    for (let seat of seatPositions) {
        seatIds.push(getSeatID(seat))
    }


    seatIds.sort((n1, n2) => n1 - n2)
    console.log("seatIDs " + seatIds)
    // console.log(`length  ${seatIds.length}`)
    return seatIds // [seatIds.length - 1]
}


// export const findMySeat = (seatPositions: string[]) => {
//     console.log(
//         getHighestSeatId(seatPositions)
//             .reduce(function (allNames, name) {
//                 if (!(name + 1 in allNames)) {
//                     return name
//                 }
//             }, {})

//     )

// }