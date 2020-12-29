import { day12Example, day12Input } from './day12Input'
import { moveShip, turnRight, turnLeft } from './day12'

describe('day 12', () => {
    describe('part 1', () => {
        test('example', () => {
            const finalPosition = moveShip(day12Example)
            expect(finalPosition).toEqual({ east: 17, north: -8 })
        })
        test('', () => {
            expect(moveShip(day12Input)).toEqual({ east: 502, north: -60 })
        })

        test('right turn', () => {
            expect(turnRight('E', 90)).toEqual('S')
            expect(turnRight('S', 90)).toEqual('W')
            expect(turnRight('W', 90)).toEqual('N')
            expect(turnRight('W', 180)).toEqual('E')
            expect(turnRight('W', 270)).toEqual('S')
            expect(turnRight('E', 180)).toEqual('W')
        })

        test('left turn', () => {
            expect(turnLeft('E', 90)).toEqual('N')
            expect(turnLeft('E', 270)).toEqual('S')
            expect(turnLeft('N', 270)).toEqual('E')
        })

    })
    describe('part 2', () => {
        test('', () => {
            expect(1).toEqual(1)
        })
    })
})