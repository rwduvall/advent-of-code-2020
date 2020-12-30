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
        shipPosition = resultOfAction.sP
        wpPosition = resultOfAction.waypointPosition
    })
    return shipPosition
}

const performAction = (action: Action, waypointPosition: ShipPosition, shipPosition: ShipPosition): { sP: ShipPosition, waypointPosition: ShipPosition } => {
    const nAction = { east: waypointPosition.east, north: waypointPosition.north + action.value }
    const sAction = { east: waypointPosition.east, north: waypointPosition.north - action.value }
    const eAction = { east: waypointPosition.east + action.value, north: waypointPosition.north }
    const wAction = { east: waypointPosition.east - action.value, north: waypointPosition.north }
    if (action.direction == 'F') {
        const amountToMoveE = waypointPosition.east * action.value
        const amountToMoveN = waypointPosition.north * action.value

        return { sP: { east: shipPosition.east + amountToMoveE, north: shipPosition.north + amountToMoveN }, waypointPosition }
    }

    if (action.direction == 'N') {
        const wP: ShipPosition = nAction
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
        let turningLeft = action.value
        let waypoint = waypointPosition
        while (turningLeft > 0) {
            waypoint = rotateLeft(waypoint)
            turningLeft -= 90
        }

        return { sP: shipPosition, waypointPosition: waypoint }
    }
    if (action.direction == 'R') {
        let turningRight = action.value
        let waypoint = waypointPosition
        while (turningRight > 0) {
            waypoint = rotateRight(waypoint)
            turningRight -= 90
        }

        return { sP: shipPosition, waypointPosition: waypoint }
    }
}

const rotateLeft = (waypoint) => {
    const newWaypoint = { ...waypoint }
    newWaypoint.north = waypoint.east
    newWaypoint.east = -waypoint.north
    return newWaypoint
}

const rotateRight = (waypoint) => {
    const newWaypoint = { ...waypoint }
    newWaypoint.east = waypoint.north
    newWaypoint.north = -waypoint.east
    return newWaypoint
}

type Action = {
    direction: string,
    value: number
}

type ShipPosition = {
    east: number,
    north: number
}


// part 1 functions
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
