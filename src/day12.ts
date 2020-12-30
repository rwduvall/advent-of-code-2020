const parse = (input: string): any[] => {
    input.slice(0, 1)
    const actions: Action[] = []
    input.split('\n').forEach(action => {
        const val: number = +action.slice(1)
        actions.push({ 'direction': action.slice(0, 1), 'value': val })
    })
    return actions
}

export const moveShip = (input: string): ShipPosition => {
    let shipPosition: ShipPosition = { east: 0, north: 0 }
    let wpPosition: ShipPosition = { east: 10, north: 1 }
    const actions = parse(input)
    actions.forEach(action => {
        const resultOfAction = performAction(action, wpPosition, shipPosition)
        // console.log({ 'shipPosition': resultOfAction.sP, resultOfAction, action })
        shipPosition = resultOfAction.sP
        wpPosition = resultOfAction.waypointPosition
        // console.log({ shipPosition, wpPosition })
    })
    return shipPosition
}

const performAction = (action: Action, waypointPosition: ShipPosition, shipPosition: ShipPosition): { sP: ShipPosition, waypointPosition: ShipPosition } => {
    if (waypointPosition == undefined) {
        // console.log({ action, shipPosition, waypointPosition })
    }
    // console.log(waypointPosition)
    const nAction = { east: waypointPosition.east, north: waypointPosition.north + action.value }
    const sAction = { east: waypointPosition.east, north: waypointPosition.north - action.value }
    const eAction = { east: waypointPosition.east + action.value, north: waypointPosition.north }
    const wAction = { east: waypointPosition.east - action.value, north: waypointPosition.north }
    if (action.direction == 'F') {

        const amountToMoveE = waypointPosition.east * action.value
        const amountToMoveN = waypointPosition.north * action.value

        // console.log({
        //     shipPosition, waypointPosition, amountToMoveE,
        //     amountToMoveN, "SPeast": shipPosition.east, action,
        //     'newShipPE': shipPosition.east + amountToMoveE,
        //     'newShipPN': shipPosition.north + amountToMoveN
        // })
        // this shouldn't always add (i think)

        return { sP: { east: shipPosition.east + amountToMoveE, north: shipPosition.north + amountToMoveN }, waypointPosition }
    }

    if (action.direction == 'N') {
        // console.log({ waypointPosition, shipPosition, action })
        const wP: ShipPosition = nAction
        // console.log({ wP })
        return { sP: shipPosition, waypointPosition: wP }
    }
    if (action.direction == 'S') {
        const wP: ShipPosition = sAction
        return { sP: shipPosition, waypointPosition: wP }
    }
    if (action.direction == 'E') {
        const wP: ShipPosition = eAction
        return { sP: shipPosition, waypointPosition: wP }
    }
    if (action.direction == 'W') {
        const wP: ShipPosition = wAction
        return { sP: shipPosition, waypointPosition: wP }
    }

    if (action.direction == 'L') {
        const newDirection = moveWPLeft(waypointPosition, action.value)
        return { sP: shipPosition, waypointPosition: newDirection }
    }
    if (action.direction == 'R') {
        const newDirection = moveWpRight(waypointPosition, action.value)
        return { sP: shipPosition, waypointPosition: newDirection }
    }
}


type Action = {
    direction: string,
    value: number
}

type ShipPosition = {
    east: number,
    north: number
}

// come back to this later, maybe

// enum Directions {
//     North = 'N',
//     South = 'S',
//     East = 'E',
//     West = 'W',
//     Left = 'L',
//     Right = 'R',
//     Forward = 'F',
// }

export const moveWpRight = (wpStartPosition: ShipPosition, degreesToTurn: number): ShipPosition => {
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }


    if ((wpStartPosition.east >= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }


    if ((wpStartPosition.east <= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }


    if ((wpStartPosition.east <= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }
}

export const moveWPLeft = (wpStartPosition: ShipPosition, degreesToTurn: number): ShipPosition => {
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }


    if ((wpStartPosition.east >= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north }
    }
    if ((wpStartPosition.east >= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }


    if ((wpStartPosition.east <= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north <= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }


    if ((wpStartPosition.east <= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 90) {
        return { east: wpStartPosition.north * -1, north: wpStartPosition.east }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 180) {
        return { east: wpStartPosition.east * -1, north: wpStartPosition.north * -1 }
    }
    if ((wpStartPosition.east <= 0) && (wpStartPosition.north >= 0) && degreesToTurn == 270) {
        return { east: wpStartPosition.north, north: wpStartPosition.east * -1 }
    }
}



export const turnRight = (startingDirection: string, degreesToTurn: number): string => {
    const directions = ['N', 'E', 'S', 'W']
    const indexOfStartDirec = directions.indexOf(startingDirection)
    let indexOfResult: number

    const numberOfTurns = degreesToTurn / 90
    if (indexOfStartDirec + numberOfTurns > directions.length - 1) {

        indexOfResult = indexOfStartDirec - 4 + numberOfTurns
    } else {
        indexOfResult = indexOfStartDirec + numberOfTurns
    }

    if (directions[indexOfResult] == undefined) {
        throw { startingDirection, degreesToTurn } //`undefined found when trying to get direction `
    }

    return directions[indexOfResult]

}

export const turnLeft = (startingDirection: string, degreesToTurn: number): string => {
    const directions = ['N', 'W', 'S', 'E']
    const indexOfStartDirec = directions.indexOf(startingDirection)
    let indexOfResult: number

    const numberOfTurns = degreesToTurn / 90
    if (indexOfStartDirec + numberOfTurns > directions.length - 1) {

        indexOfResult = indexOfStartDirec - 4 + numberOfTurns
    } else {
        indexOfResult = indexOfStartDirec + numberOfTurns
    }

    if (directions[indexOfResult] == undefined) {
        throw { startingDirection, degreesToTurn, indexOfResult, numberOfTurns } //`undefined found when trying to get direction `
    }

    return directions[indexOfResult]

}
