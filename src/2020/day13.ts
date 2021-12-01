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
    const parsedInput: BusWithT[] = input.split(',').map(i => {
        if (i != 'x') {
            return Number(i)
        } else {
            return 'x'
        }
    }).map((n, index) => {
        if (n != 'x') {
            const busWT: BusWithT = { 'busNumber': n, 't': index }
            return busWT
        }
    }).filter(item => {
        return item !== undefined
    })



    return parsedInput
}

export const considerAllNumbers = (input: BusWithT[]) => {
    const firstBus = input[0]

    // need to find a way to start with a higher T right now multiplying by the number in puzzle
    // could do 
    // let T = findNextNumber(firstBus.busNumber, input[1]) - input[1].t //firstBus.busNumber * 100000000000000
    const lcm: number = 1687931
    let T = lcm


    // T = findNextNumber()
    // console.log(T)
    // console.log({ 'i': input[input.length - 1] })

    let aNumberIsWrong = true

    while (aNumberIsWrong) {
        T += firstBus.busNumber
        // T += lcm
        aNumberIsWrong = test(input, T).includes(false)
    }

    return T

}

const test = (input: BusWithT[], T: number) => {
    const results = []
    input.forEach((item, index) => {
        results.push(Number.isInteger((T + item.t) / item.busNumber))
    })

    return results
}


const findNextNumber = (first: number, second: BusWithT) => {

    // { 'busNumber': n, 't': index }

    let firstBus = first
    let secondBus = second.busNumber
    const secondBusT = second.t

    let stop = true
    while (stop) {
        // do {
        secondBus += second.busNumber
        if (Number.isInteger((secondBus - secondBusT) / firstBus) == true) {
            stop = false
        }
    }
    return secondBus
}

export type BusWithT = { busNumber: number, 't': number }