import { parseAnswers, asdf } from './day6Par2'

const data = `abc

a
b
c

ab
ac

a
a
a
a

b`

describe.skip('day 6', () => {

    test('', () => {


        // console.log(parseAnswers(data))
        expect(3).toBe(3)
    })

    test('', () => {

        const result = asdf(['a', 'a', 'cb', 'ba', 'abc'])
        // console.log(result)
        expect(3).toBe(3)
    })


})