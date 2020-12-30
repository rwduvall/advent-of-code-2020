import { seatStatusesConveredToBooleans, changeSeats, countOfOccupiedSeats, parse, loopUntilNoChange } from './day11'
import { day11Input } from './day11Input'

describe.skip('day 11 part 2', () => {
    test.skip('simple', () => {
        const i = `.##
.##
#..`

        const e = `.##
.##
#..`
        const boolArray = seatStatusesConveredToBooleans(i)
        const change = changeSeats(boolArray)
        expect(parse(change)).toEqual(e + '\n')
    })

    test('day 11 part 2 example', () => {
        const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

        const oneRunOutput = `#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##`

        const output = `#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.LL.L#
#.LLLL#.LL
..#.L.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#`

        //         const simpleInput = `L.LL.L
        // LLLLLL`

        // const seatToBool = seatStatusesConveredToBooleans(input)
        // const chagne = changeSeats(seatToBool)
        // expect(parse(chagne)).toEqual(oneRunOutput + '\n')

        console.log(loopUntilNoChange(day11Input))

        // const exampleNumberOfseats = loopUntilNoChange(input)
        // expect(parse(exampleNumberOfseats.finalAnswer)).toEqual(output + '\n')
    })


})

describe.skip('day 11 part1', () => {

    const inputToSeeOutput = `L.L
LLL
L.L`

    const Input1 = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

    const example1Output = `#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##`

    const example1SecondRoundOutPut = `#.LL.L#.##
#LLLLLL.L#
L.L.L..L..
#LLL.LL.L#
#.LL.LL.LL
#.LLLL#.##
..L.L.....
#LLLLLLLL#
#.LLLLLL.L
#.#LLLL.##`

    test.skip('simple parse to bool', () => {
        const inputToSeeOutput = `L.L#
LLL#
L.L#`
        const outcome = seatStatusesConveredToBooleans(inputToSeeOutput)
        expect(outcome).toEqual([[false, null, false, true], [false, false, false, true], [false, null, false, true]])
        expect(seatStatusesConveredToBooleans(Input1)).toEqual(
            [
                [false, null, false, false, null, false, false, null, false, false],
                [false, false, false, false, false, false, false, null, false, false,],
                [false, null, false, null, false, null, null, false, null, null,],
                [false, false, false, false, null, false, false, null, false, false,],
                [false, null, false, false, null, false, false, null, false, false,],
                [false, null, false, false, false, false, false, null, false, false,],
                [null, null, false, null, false, null, null, null, null, null,],
                [false, false, false, false, false, false, false, false, false, false,],
                [false, null, false, false, false, false, false, false, null, false,],
                [false, null, false, false, false, false, false, null, false, false,],
            ]
        )

        expect(seatStatusesConveredToBooleans(example1SecondRoundOutPut)).toEqual([
            [true, null, false, false, null, false, true, null, true, true],
            [true, false, false, false, false, false, false, null, false, true],
            [false, null, false, null, false, null, null, false, null, null],
            [true, false, false, false, null, false, false, null, false, true],
            [true, null, false, false, null, false, false, null, false, false],
            [true, null, false, false, false, false, true, null, true, true],
            [null, null, false, null, false, null, null, null, null, null],
            [true, false, false, false, false, false, false, false, false, true],
            [true, null, false, false, false, false, false, false, null, false],
            [true, null, true, false, false, false, false, null, true, true]])
    })

    test.skip('convert to original format', () => {
        const simple = `#.L
LLL
`
        expect(parse([[true, null, false,], [false, false, false]])).toEqual(simple)
        expect(parse([
            [false, null, false, false, null, false, false, null, false, false],
            [false, false, false, false, false, false, false, null, false, false,],
            [false, null, false, null, false, null, null, false, null, null,],
            [false, false, false, false, null, false, false, null, false, false,],
            [false, null, false, false, null, false, false, null, false, false,],
            [false, null, false, false, false, false, false, null, false, false,],
            [null, null, false, null, false, null, null, null, null, null,],
            [false, false, false, false, false, false, false, false, false, false,],
            [false, null, false, false, false, false, false, false, null, false,],
            [false, null, false, false, false, false, false, null, false, false,],
        ])).toEqual(Input1 + '\n')
    })

    test.skip('simple change', () => {
        // const inputForReadableOutput = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        // console.log(`final output: ${changeSeats(inputForReadableOutput)}`)
        const startSeats = [
            [true, null, true],
            [true, true, true],
            [true, null, true]]
        expect(changeSeats(startSeats)).toEqual([[true, null, true], [true, false, true], [true, null, true]])
    })

    test.skip('simple', () => {
        const i = `.##
.##
#..`

        const e = `.##
.L#
#..`
        const boolArray = seatStatusesConveredToBooleans(i)
        const change = changeSeats(boolArray)
        expect(parse(change)).toEqual(e + '\n')
    })

    test.skip('example 1 first converstion', () => {
        const doTheThing = changeSeats(seatStatusesConveredToBooleans(Input1))
        const expectedResult = seatStatusesConveredToBooleans(example1Output)

        expect(doTheThing).toEqual(expectedResult)

        const doItAgain = changeSeats(doTheThing)
        const secondExpected = seatStatusesConveredToBooleans(example1SecondRoundOutPut)

        expect(doItAgain).toEqual(secondExpected)
        expect(parse(doItAgain)).toEqual(example1SecondRoundOutPut + '\n')
    })

    test.skip('number of surrounding seats count', () => {
        const oneTrue = [false, false, true]
        const one = countOfOccupiedSeats(oneTrue, true)
        const two = countOfOccupiedSeats(oneTrue, false)
        expect(one).toEqual(1)
        expect(two).toEqual(2)
    })

    test('full example', () => {
        console.log(loopUntilNoChange(day11Input))
    })

    // const r = [[true, null, false, false, null, false, true, null, true, true], [true, false, false, false, false, false, false, null, true, true], [true, null, false, null, false, null, null, true, null, null], [true, false, false, false, null, false, true, null, false, true], [true, null, false, false, null, false, false, null, false, false], [true, null, true, false, false, false, true, null, true, true], [null, null, false, null, false, null, null, null, null, null], [true, false, false, false, false, false, false, false, false, true], [true, null, false, false, false, false, false, false, null, false], [true, null, true, false, false, false, true, null, true, true]]
    // const e = [[true, null, false, false, null, false, true, null, true, true], [true, false, false, false, false, false, false, null, false, true], [false, null, false, null, false, null, null, false, null, null], [true, false, false, false, null, false, false, null, false, true], [true, null, false, false, null, false, false, null, false, false], [true, null, false, false, false, false, true, null, true, true], [null, null, false, null, false, null, null, null, null, null], [true, false, false, false, false, false, false, false, false, true], [true, null, false, false, false, false, false, false, null, false], [true, null, true, false, false, false, false, null, true, true]]

})