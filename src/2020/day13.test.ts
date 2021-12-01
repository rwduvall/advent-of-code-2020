import { findBus, mutlipleUntil, part2, considerAllNumbers, BusWithT } from './day13';
import { exampleTime, exampleBuses, puzzleBuses, puzzleTime, exmaple2Part2, puzzlePart2 } from './day13Input'

describe.skip('day 13', () => {
    describe('part 1', () => {
        test('example', () => {
            expect(findBus(exampleBuses, exampleTime)).toEqual(295)
            expect(findBus(puzzleBuses, puzzleTime)).toEqual(333)

        })
        test('multipleUntil', () => {
            mutlipleUntil(2, 20)
            expect(mutlipleUntil(2, 20)).toEqual(20)
            expect(mutlipleUntil(59, 939)).toEqual(944)

        })
    })
    describe('part 2', () => {
        test('example', () => {
            const example1 = `7,13,x,x,59,x,31,19`
            console.log(part2(example1))
            // expect(part2(example1))).toEqual(1068781)
        })
        test('', () => {
            const parsedInput = [
                { busNumber: 7, t: 0 },
                { busNumber: 13, t: 1 },
                { busNumber: 59, t: 4 },
                { busNumber: 31, t: 6 },
                { busNumber: 19, t: 7 }
            ]

            const f = considerAllNumbers(part2(exmaple2Part2))
            expect(f).toEqual(90)

            // function lcm_two_numbers(x, y) {
            //     if ((typeof x !== 'number') || (typeof y !== 'number'))
            //         return false;
            //     return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
            // }

            // function gcd_two_numbers(x, y) {
            //     x = Math.abs(x);
            //     y = Math.abs(y);
            //     while (y) {
            //         var t = y;
            //         y = x % y;
            //         x = t;
            //     }
            //     return x;
            // }

            // console.log(lcm_two_numbers(29, 467));
            // console.log(lcm_two_numbers(467, 37));

        })
    })
})

// [
//     { busNumber: 7, t: 0 },
//     { busNumber: 13, t: 1 },
//     { busNumber: 59, t: 4 },
//     { busNumber: 31, t: 6 },
//     { busNumber: 19, t: 7 }
//   ]