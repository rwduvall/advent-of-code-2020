type command = {
    hasBeenRun: boolean,
    instruction: string,
    num: number,
    addOrSub: string
}

export const boot = (instruction: string) => {
    const commands = parse(instruction)

    var finalValue = 0
    var indexOfCommand = 0
    var stop = true
    const commandIndexs = []
    do {
        const result = run(commands[indexOfCommand], indexOfCommand, finalValue)
        finalValue = result.finalValue
        stop = result.stop
        indexOfCommand = result.index
 
        // Part to was just adding the second check here for end of commands once the command is fixed
    } while (stop == false && indexOfCommand < commands.length)

    // console.log(commands[473])
    return finalValue
}

const run = (command: command, index: number, finalValue: number) => {
    var finalValue = finalValue
    const stop: boolean = command.hasBeenRun
    if (command.hasBeenRun == true) {
        return { finalValue, index, stop: true }
    }

    if (command.instruction == 'acc') {
        if (command.addOrSub == '-') {
            finalValue -= command.num
        }
        if (command.addOrSub == '+') {
            finalValue += command.num
        }
        index += 1
    }

    if (command.instruction == 'nop') {
        index += 1
    }

    if (command.instruction == 'jmp') {
        if (command.addOrSub == '-') {
            index -= command.num
        }
        if (command.addOrSub == '+') {
            index += command.num
        }
    }
    command.hasBeenRun = true
    return { finalValue, index, stop }
}



export const parse = (data: string) => {
    const commands = []
    const foo = data.split("\n")
    foo.forEach(value => {
        const bat = value.split(' ')
        const addOrSub: string = bat[1].charAt(0)
        const splitvalue: string = bat[1]
        const num: number = +splitvalue.substr(1)
        const addTovalue: command = { hasBeenRun: false, instruction: bat[0], num, addOrSub }
        commands.push(addTovalue)
    })

    return commands


}