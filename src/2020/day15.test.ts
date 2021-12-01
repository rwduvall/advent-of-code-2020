import { example1, f, example2, example3, example4, part2, part1 } from './day15'

test.skip('part 1', () => {
    expect(f(example1, 10)).toEqual(0)
    expect(f(example1, 2020)).toEqual(436)
    expect(f(example2, 2020)).toEqual(1)
    expect(f(example3, 2020)).toEqual(10)
    expect(f(example4, 2020)).toEqual(27)
    expect(f([1, 0, 16, 5, 17, 4], 2020)).toEqual(1294)
})

test.skip('part 2', () => {

    // part1(example1)
    // part2(example1)
    console.log(f(example1, 3000000))
    // console.log(Array.from({ length: 5 }, (v, i) => i))

    // expect(f([1, 3, 2], 30000000)).toEqual(0)
    // expect(f([1, 0, 16, 5, 17, 4], 30000000)).toEqual(175594)

})