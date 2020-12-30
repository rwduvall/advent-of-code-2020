const parse = (input: string) => {

    return input.split(',').filter(bus => {
        return bus != 'x'
    }).map(b => {
        return Number(b)
    })
}

export const findBus = (buses: string, depatureTime: number) => {
    const busArrray = parse(buses)
    const busesGreaterThanDepature = busArrray.map(bus => {
        return { 'busNumber': bus, 'dTime': mutlipleUntil(bus, depatureTime) }
    }).map(bus => {
        return { 'busNumber': bus.busNumber, 'waitTime': bus.dTime - depatureTime }
    }).reduce(function (prev, curr) {
        return prev.waitTime < curr.waitTime ? prev : curr;
    })

    return busesGreaterThanDepature.busNumber * busesGreaterThanDepature.waitTime
}

export const mutlipleUntil = (item: number, greatThanOrEqual: number) => {
    let result = item
    while (result < greatThanOrEqual) {
        result += item
    }
    return result
}

export const part2 = (input: string) => {
    const parsedInput = input.split(',').map(i => {
        if (i != 'x') {
            return Number(i)
        } else {
            return 'x'
        }
    }).map((n, index) => {
        if (n != 'x') {
            return { 'busNumber': n, 't': index }
        }
    }).filter(item => {
        return item !== undefined
    })

    let firstBus = parsedInput[0].busNumber
    let secondBus = parsedInput[1].busNumber
    const secondBusT = parsedInput[1].t

    const foo = (secondBus - secondBusT) / firstBus
    let stop = true
    // console.log({ foo })

    // while (secondBus < 1068780) {
    while (stop) {
        // do {
        secondBus += parsedInput[1].busNumber
        if (Number.isInteger((secondBus - secondBusT) / firstBus) == true) {
            stop = false
        }
    }

    console.log(firstBus)
    console.log(secondBus)

    return parsedInput
}
