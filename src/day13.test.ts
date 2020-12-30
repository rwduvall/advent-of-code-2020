import { findbus, mutlipleUntil } from './day13';
import { exampleTime, exampleBuses, puzzleBuses, puzzleTime } from './day13Input'

describe('day 13', () => {
    describe('part 1', () => {
        test('example', () => {
            expect(findbus(exampleBuses, exampleTime)).toEqual(295)
            expect(findbus(puzzleBuses, puzzleTime)).toEqual(333)

        })
        test('example', () => {
            mutlipleUntil(2, 20)
            expect(mutlipleUntil(2, 20)).toEqual(20)
            expect(mutlipleUntil(59, 939)).toEqual(944)

        })
    })
})