export const isTicketValid = (numberFromTicket: number, rules: LowHigh[]): boolean => {
    let numberMatchesRules = false
    rules.forEach(rule => {
        const h = numberFromTicket <= rule.high
        const l = numberFromTicket >= rule.low

        if (h && l) {
            numberMatchesRules = true
        }
    })
    return numberMatchesRules
}

export const parseRules = (rules): LowHigh[] => {
    const ruleArray = rules.split('\n').map(rule => {
        return rule.replace(/(.*?)\: /g, '')
    }).map(r => {
        return r.split(' or ').map(f => {
            const low = f.split('-')[0]
            const high = f.split('-')[1]
            return { low, high }
        })
    })
    return ruleArray.flat()
}

export const parseNumber = (numbers: string): number[] => {
    return numbers.replace(/\n/g, ',').split(',').map(n => {
        return Number(n)
    })
}

export const day16Part1 = (ticketNumbers: number[], rules: LowHigh[]): number => {
    const numbersThatFitRules: number[] = ticketNumbers.filter(num => {
        return !isTicketValid(num, rules)
    })
    return numbersThatFitRules.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )
}

type LowHigh = {
    low: number,
    high: number
}