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