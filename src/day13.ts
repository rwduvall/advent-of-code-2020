const parse = (input: string) => {

    return input.split(',').filter(bus => {
        return bus != 'x'
    }).map(b => {
        return Number(b)
    })
}

export const findbus = (buses: string, depatureTime: number) => {
    const busArrray = parse(buses)
    const busesGreaterThanDepature = busArrray.map(bus => {
        return { 'busNumber': bus, 'dTime': mutlipleUntil(bus, depatureTime) }
    })
    const busAndWaitTime = busesGreaterThanDepature.map(bus => {
        return { 'busNumber': bus.busNumber, 'waitTime': bus.dTime - depatureTime }
    })
    const busWithLowestWaitTime = busAndWaitTime.reduce(function (prev, curr) {
        return prev.waitTime < curr.waitTime ? prev : curr;
    })
    
    return busWithLowestWaitTime.busNumber * busWithLowestWaitTime.waitTime
}

export const mutlipleUntil = (item: number, greatThanOrEqual: number) => {
    let result = item
    while (result < greatThanOrEqual) {
        result += item
    }
    return result
}