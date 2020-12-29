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
    let shipIsFacing = 'E'
    let shipPosition: ShipPosition = { east: 0, north: 0 }
    const actions = parse(input)
    actions.forEach(action => {
        const resultOfAction = performAction(action, shipPosition, shipIsFacing)
        // console.log({ shipIsFacing, resultOfAction, action })
        shipPosition = resultOfAction.sP
        shipIsFacing = resultOfAction.shipFacing
    })
    return shipPosition
}

const performAction = (action: Action, shipPosition: ShipPosition, shipFacing: string): { sP: ShipPosition, 'shipFacing': string } => {
    const nAction = { east: shipPosition.east, north: shipPosition.north + action.value }
    const sAction = { east: shipPosition.east, north: shipPosition.north - action.value }
    const eAction = { east: shipPosition.east + action.value, north: shipPosition.north }
    const wAction = { east: shipPosition.east - action.value, north: shipPosition.north }
    if (action.direction == 'F') {
        if (shipFacing == 'N') {
            const sP: ShipPosition = nAction
            return { sP, shipFacing }
        }
        if (shipFacing == 'S') {

            const sP: ShipPosition = sAction
            // console.log({ 'before': shipPosition, 'after': sP, action, 'foo': shipPosition.north - action.value })
            return { sP, shipFacing }
        }
        if (shipFacing == 'E') {
            const sP: ShipPosition = eAction
            return { sP, shipFacing }
        }
        if (shipFacing == 'W') {
            const sP: ShipPosition = wAction
            return { sP, shipFacing }
        }
    }

    if (action.direction == 'N') {
        const sP: ShipPosition = nAction
        return { sP, shipFacing }
    }
    if (action.direction == 'S') {
        const sP: ShipPosition = sAction
        return { sP, shipFacing }
    }
    if (action.direction == 'E') {
        const sP: ShipPosition = eAction
        return { sP, shipFacing }
    }
    if (action.direction == 'W') {
        const sP: ShipPosition = wAction
        return { sP, shipFacing }
    }

    if (action.direction == 'L') {
        const newDirection = turnLeft(shipFacing, action.value)
        return { sP: shipPosition, shipFacing: newDirection }
    }
    if (action.direction == 'R') {
        const newDirection = turnRight(shipFacing, action.value)
        return { sP: shipPosition, shipFacing: newDirection }
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
