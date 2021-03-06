import { parse, figureOutOrder } from './day10'

const simpleExampleInput = `16
10
15
5
1
11
7
19
6
12
4`

test.skip('', () => {
    const expected = [
        16, 10, 15, 5, 1,
        11, 7, 19, 6, 12,
        4
    ]
    const p = parse(simpleExampleInput)
    expect.arrayContaining(expected)
    // expect(p).toEqual(expect.arrayContaining(expected))
})

test.skip('', () => {
    const p = parse(simpleExampleInput)
    console.log(figureOutOrder(p))
    expect(1).toEqual(1)
})

const day10Input = `67
118
90
41
105
24
137
129
124
15
59
91
94
60
108
63
112
48
62
125
68
126
131
4
1
44
77
115
75
89
7
3
82
28
97
130
104
54
40
80
76
19
136
31
98
110
133
84
2
51
18
70
12
120
47
66
27
39
109
61
34
121
38
96
30
83
69
13
81
37
119
55
20
87
95
29
88
111
45
46
14
11
8
74
101
73
56
132
23`
