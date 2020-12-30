import { day12Example, day12Input } from './day12Input'
import { moveShip, turnRight, turnLeft, moveWpRight, moveWPLeft } from './day12'

describe('day 12', () => {
    describe.skip('part 1', () => {
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
            expect(moveShip(day12Example)).toEqual({ east: 214, north: -72 })
            expect(moveShip(day12Input)).toEqual({ east: 46871, north: 54989 })

        })
        test('F', () => {
            const input = `F10
R180
F2`
            // ship: 100, 10
            // wp: -10, -1
            // ship: 80, 8 move -20, -2
            expect(moveShip(input)).toEqual({ east: 80, north: 8 })

            const input2 = `F10
R180
F2
N10
F5`

            // ship: 100, 10
            // wp: -10, -1
            // ship: 80, 8 move -20, -2
            // wp: -10, 9
            //ship: 30, 53 move -50, 45
            expect(moveShip(input2)).toEqual({ east: 30, north: 53 })
        })

        // these missed a bug some where
        test('R90', () => {
            expect(moveWpRight({ east: 10, north: 4 }, 90)).toEqual({ east: 4, north: -10 })
            expect(moveWpRight({ east: 4, north: -10 }, 90)).toEqual({ east: -10, north: -4 })
            expect(moveWpRight({ east: -10, north: -4 }, 90)).toEqual({ east: -4, north: 10 })
            expect(moveWpRight({ east: -4, north: 10 }, 90)).toEqual({ east: 10, north: 4 })
        })

        test('R180', () => {
            expect(moveWpRight({ east: 10, north: 4 }, 180)).toEqual({ east: -10, north: -4 })
            expect(moveWpRight({ east: 4, north: -10 }, 180)).toEqual({ east: -4, north: 10 })
            expect(moveWpRight({ east: -10, north: -4 }, 180)).toEqual({ east: 10, north: 4 })
            expect(moveWpRight({ east: -4, north: 10 }, 180)).toEqual({ east: 4, north: -10 })
        })
        test('R270', () => {
            expect(moveWpRight({ east: 10, north: 4 }, 270)).toEqual({ east: -4, north: 10 })
            expect(moveWpRight({ east: 4, north: -10 }, 270)).toEqual({ east: 10, north: 4 })
            expect(moveWpRight({ east: -10, north: -4 }, 270)).toEqual({ east: 4, north: -10 })
            expect(moveWpRight({ east: -4, north: 10 }, 270)).toEqual({ east: -10, north: -4 })
        })
        test('L90', () => {
            expect(moveWPLeft({ east: 10, north: 4 }, 90)).toEqual({ east: -4, north: 10 })
            expect(moveWPLeft({ east: 4, north: -10 }, 90)).toEqual({ east: 10, north: 4 })
            expect(moveWPLeft({ east: -10, north: -4 }, 90)).toEqual({ east: 4, north: -10 })
            expect(moveWPLeft({ east: -4, north: 10 }, 90)).toEqual({ east: -10, north: -4 })
        })
        test('L180', () => {
            expect(moveWPLeft({ east: 10, north: 4 }, 180)).toEqual({ east: -10, north: -4 })
            expect(moveWPLeft({ east: 4, north: -10 }, 180)).toEqual({ east: -4, north: -10 })
            expect(moveWPLeft({ east: -10, north: -4 }, 180)).toEqual({ east: 10, north: 4 })
            expect(moveWPLeft({ east: -4, north: 10 }, 180)).toEqual({ east: 4, north: -10 })
        })
        test('L270', () => {
            expect(moveWPLeft({ east: 10, north: 4 }, 270)).toEqual({ east: 4, north: -10 })
            expect(moveWPLeft({ east: 4, north: -10 }, 270)).toEqual({ east: -10, north: -4 })
            expect(moveWPLeft({ east: -10, north: -4 }, 270)).toEqual({ east: -4, north: 10 })
            expect(moveWPLeft({ east: -4, north: 10 }, 270)).toEqual({ east: 10, north: 4 })
        })
    })
})