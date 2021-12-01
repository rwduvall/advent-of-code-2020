import * as _ from 'lodash'

export const isTicketValid = (numberFromTicket: number[], rules: LowHigh[]) => {
    let resultForEachNumber = []

    // for each ticket number
    for (let ticketNumber of numberFromTicket) {
        // check that it matches each rule
        const resultOfAllRulesOnSingleNumber = []

        for (let rule of rules) {
            if (doesRuleApply(ticketNumber, rule)) {
                resultOfAllRulesOnSingleNumber.push(false)
            } else {
                resultOfAllRulesOnSingleNumber.push(true)
            }
        }

        // if all are true
        // maybe only one needs to be true
        if (resultOfAllRulesOnSingleNumber.includes(false)) {
            // than number is valid
            resultForEachNumber.push(true)
        } else {
            resultForEachNumber.push(false)
        }
    }

    const ticketIsValid = !resultForEachNumber.includes(false)

    return { ticketIsValid }
}

export const parseRules = (rules: string): LowHigh[] => {
    const allRules: LowHigh[] = []
    rules.split('\n').map(r => {
        const splitKeyValue = r.split(': ')
        const ruleName = splitKeyValue[0]
        const values: string[] = splitKeyValue[1].replace(' or ', '-').split('-') //.split(' or ')

        allRules.push({ ruleName, lLow: Number(values[0]), lHigh: Number(values[1]), hLow: Number(values[2]), hHigh: Number(values[3]) })
    })
    return allRules
}

export const parseNumber = (numbers: string): number[][] => {
    const formattedTickets = []
    const tickets = numbers.split('\n')
    tickets.forEach(ticket => {
        formattedTickets.push(
            ticket.split(',').map(n => {
                return Number(n)
            })
        )
    })
    return formattedTickets
}

export const validTickets = (tickets: number[][], rules: LowHigh[]) => {
    const validTickets = tickets.filter(ticket => {
        const isTicketVal = isTicketValid(ticket, rules).ticketIsValid
        return isTicketVal
    })
    return validTickets
}

export const orderRulesApply = (ticketNumber: number[], rule: LowHigh[]) => {
    // this func see what order the rules apply
    // probably easyiest to make [{ruleName, indexOfNumber}] than use that to see where each rule consitenlty applies
}

export const doesRuleApply = (ticketNumber: number, rule: LowHigh) => {
    let isNumberInLowRange: boolean = rule.lLow <= ticketNumber && ticketNumber >= rule.lHigh
    let isNumberInHighRange: boolean = rule.hHigh <= ticketNumber && ticketNumber >= rule.hHigh
    return isNumberInHighRange || isNumberInLowRange
}

type LowHigh = {
    ruleName: string,
    lLow: number,
    lHigh: number,
    hLow: number,
    hHigh: number
}