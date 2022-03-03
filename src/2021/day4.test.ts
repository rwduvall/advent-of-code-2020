import {
  markNumberAsCalled,
  turnInputIntoObj,
  isBoardWinning,
  findWinningBoard,
  finalAnswer
} from "./day4";
describe("day 4", () => {
  test("markNumberAsCalled", () => {
    expect(
      markNumberAsCalled(3, {
        row1: {
          num1: { num: 1, called: false },
          num2: { num: 2, called: false },
          num3: { num: 3, called: false },
          num4: { num: 4, called: false },
          num5: { num: 5, called: false }
        },
        row2: {
          num1: { num: 21, called: false },
          num2: { num: 22, called: false },
          num3: { num: 23, called: false },
          num4: { num: 24, called: false },
          num5: { num: 25, called: false }
        },
        row3: {
          num1: { num: 31, called: false },
          num2: { num: 32, called: false },
          num3: { num: 33, called: false },
          num4: { num: 34, called: false },
          num5: { num: 35, called: false }
        },
        row4: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false }
        },
        row5: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false }
        }
      })
    ).toEqual({
      row1: {
        num1: { num: 1, called: false },
        num2: { num: 2, called: false },
        num3: { num: 3, called: true },
        num4: { num: 4, called: false },
        num5: { num: 5, called: false }
      },
      row2: {
        num1: { num: 21, called: false },
        num2: { num: 22, called: false },
        num3: { num: 23, called: false },
        num4: { num: 24, called: false },
        num5: { num: 25, called: false }
      },
      row3: {
        num1: { num: 31, called: false },
        num2: { num: 32, called: false },
        num3: { num: 33, called: false },
        num4: { num: 34, called: false },
        num5: { num: 35, called: false }
      },
      row4: {
        num1: { num: 41, called: false },
        num2: { num: 42, called: false },
        num3: { num: 43, called: false },
        num4: { num: 44, called: false },
        num5: { num: 45, called: false }
      },
      row5: {
        num1: { num: 41, called: false },
        num2: { num: 42, called: false },
        num3: { num: 43, called: false },
        num4: { num: 44, called: false },
        num5: { num: 45, called: false }
      }
    });
    expect(
      markNumberAsCalled(23, {
        row1: {
          num1: { num: 1, called: false },
          num2: { num: 2, called: false },
          num3: { num: 3, called: false },
          num4: { num: 4, called: false },
          num5: { num: 5, called: false }
        },
        row2: {
          num1: { num: 21, called: false },
          num2: { num: 22, called: false },
          num3: { num: 23, called: false },
          num4: { num: 24, called: false },
          num5: { num: 25, called: false }
        },
        row3: {
          num1: { num: 31, called: false },
          num2: { num: 32, called: false },
          num3: { num: 33, called: false },
          num4: { num: 34, called: false },
          num5: { num: 35, called: false }
        },
        row4: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false }
        },
        row5: {
          num1: { num: 41, called: false },
          num2: { num: 42, called: false },
          num3: { num: 43, called: false },
          num4: { num: 44, called: false },
          num5: { num: 45, called: false }
        }
      }).row2.num3.called
    ).toEqual(true);
  });
  test("", () => {
    expect(turnInputIntoObj(boards)[2]).toEqual({
      row1: {
        num1: { num: 14, called: false },
        num2: { num: 21, called: false },
        num3: { num: 17, called: false },
        num4: { num: 24, called: false },
        num5: { num: 4, called: false }
      },
      row2: {
        num1: { num: 10, called: false },
        num2: { num: 16, called: false },
        num3: { num: 15, called: false },
        num4: { num: 9, called: false },
        num5: { num: 19, called: false }
      },
      row3: {
        num1: { num: 18, called: false },
        num2: { num: 8, called: false },
        num3: { num: 23, called: false },
        num4: { num: 26, called: false },
        num5: { num: 20, called: false }
      },
      row4: {
        num1: { num: 22, called: false },
        num2: { num: 11, called: false },
        num3: { num: 13, called: false },
        num4: { num: 6, called: false },
        num5: { num: 5, called: false }
      },
      row5: {
        num1: { num: 2, called: false },
        num2: { num: 0, called: false },
        num3: { num: 12, called: false },
        num4: { num: 3, called: false },
        num5: { num: 7, called: false }
      }
    });
  });
  test("findWinningBoard", () => {
    expect(
      isBoardWinning({
        row1: {
          num1: { num: 14, called: false },
          num2: { num: 21, called: false },
          num3: { num: 17, called: false },
          num4: { num: 24, called: false },
          num5: { num: 4, called: false }
        },
        row2: {
          num1: { num: 10, called: true },
          num2: { num: 16, called: true },
          num3: { num: 15, called: true },
          num4: { num: 9, called: true },
          num5: { num: 19, called: true }
        },
        row3: {
          num1: { num: 18, called: false },
          num2: { num: 8, called: false },
          num3: { num: 23, called: false },
          num4: { num: 26, called: false },
          num5: { num: 20, called: false }
        },
        row4: {
          num1: { num: 22, called: false },
          num2: { num: 11, called: false },
          num3: { num: 13, called: false },
          num4: { num: 6, called: false },
          num5: { num: 5, called: false }
        },
        row5: {
          num1: { num: 2, called: false },
          num2: { num: 0, called: false },
          num3: { num: 12, called: false },
          num4: { num: 3, called: false },
          num5: { num: 7, called: false }
        }
      })
    ).toEqual(true);
    expect(
      isBoardWinning({
        row1: {
          num1: { num: 14, called: false },
          num2: { num: 21, called: false },
          num3: { num: 17, called: false },
          num4: { num: 24, called: false },
          num5: { num: 4, called: false }
        },
        row2: {
          num1: { num: 10, called: false },
          num2: { num: 16, called: false },
          num3: { num: 15, called: false },
          num4: { num: 9, called: false },
          num5: { num: 19, called: false }
        },
        row3: {
          num1: { num: 18, called: false },
          num2: { num: 8, called: false },
          num3: { num: 23, called: false },
          num4: { num: 26, called: false },
          num5: { num: 20, called: false }
        },
        row4: {
          num1: { num: 22, called: false },
          num2: { num: 11, called: false },
          num3: { num: 13, called: false },
          num4: { num: 6, called: false },
          num5: { num: 5, called: false }
        },
        row5: {
          num1: { num: 2, called: false },
          num2: { num: 0, called: false },
          num3: { num: 12, called: false },
          num4: { num: 3, called: false },
          num5: { num: 7, called: false }
        }
      })
    ).toEqual(false);
    expect(
      isBoardWinning({
        row1: {
          num1: { num: 14, called: false },
          num2: { num: 21, called: false },
          num3: { num: 17, called: false },
          num4: { num: 24, called: true },
          num5: { num: 4, called: false }
        },
        row2: {
          num1: { num: 10, called: false },
          num2: { num: 16, called: false },
          num3: { num: 15, called: false },
          num4: { num: 9, called: true },
          num5: { num: 19, called: false }
        },
        row3: {
          num1: { num: 18, called: false },
          num2: { num: 8, called: false },
          num3: { num: 23, called: false },
          num4: { num: 26, called: true },
          num5: { num: 20, called: false }
        },
        row4: {
          num1: { num: 22, called: false },
          num2: { num: 11, called: false },
          num3: { num: 13, called: false },
          num4: { num: 6, called: true },
          num5: { num: 5, called: false }
        },
        row5: {
          num1: { num: 2, called: false },
          num2: { num: 0, called: false },
          num3: { num: 12, called: false },
          num4: { num: 3, called: true },
          num5: { num: 7, called: false }
        }
      })
    ).toEqual(true);
  });
  test("part 2 final", () => {
    expect(findWinningBoard(numbers, turnInputIntoObj(boards)).board).toEqual({
      row1: {
        num1: { num: 3, called: false },
        num2: { num: 15, called: false },
        num3: { num: 0, called: true },
        num4: { num: 2, called: true },
        num5: { num: 22, called: false }
      },
      row2: {
        num1: { num: 9, called: true },
        num2: { num: 18, called: false },
        num3: { num: 13, called: true },
        num4: { num: 17, called: true },
        num5: { num: 5, called: true }
      },
      row3: {
        num1: { num: 19, called: false },
        num2: { num: 8, called: false },
        num3: { num: 7, called: true },
        num4: { num: 25, called: false },
        num5: { num: 23, called: true }
      },
      row4: {
        num1: { num: 20, called: false },
        num2: { num: 11, called: true },
        num3: { num: 10, called: true },
        num4: { num: 24, called: true },
        num5: { num: 4, called: true }
      },
      row5: {
        num1: { num: 14, called: true },
        num2: { num: 21, called: true },
        num3: { num: 16, called: true },
        num4: { num: 12, called: false },
        num5: { num: 6, called: false }
      }
    });
  });
  test("sum", () => {
    const answer = findWinningBoard(numbers, turnInputIntoObj(boards));
    expect(finalAnswer(answer.board, answer.lastnum)).toEqual(1924);
  });
});

const numbers = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1
];

const boards = `22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const boardInput = `63  5 10 69 57
64 88 27 40 76
59 20 58 90  6
74 32 72 16 26
50 17  7 93 94

92 77 33 44 14
35 25 47 91  7
99  6 56 82 10
41 93 70  5 85
81 97 58 96 29

24 53  4  8 23
 0 13 48 47 83
55 56 72 50 52
82 33 58 16 11
91  7 89  9 81

86 70 16  4 34
49 69 37 78 11
22 47 59 20 38
33 82 60 63 56
18 74 36  7 99

64 45 72 86  7
34 50 94  0 85
15 69  2 26 32
62 96 41 17 78
63  5 99 79 47

62 63 24 37 50
89 80 40 41 13
32 64 95 93 66
45  3 23 78 48
60 26 31 61 99

 6 63 66 67 15
33 43 62 95 89
72 61 60  2 10
29  7  9 50 18
28 36  3 53 30

91  4 57 74 66
49 36 54  7 89
33 65 59 14 92
63 42  0 20 11
64 32 96 18 58

85 59 33 18 99
90  4  1 51 35
 2 57  9  5 78
30 53 25 23 80
74 76 20 19 21

 5 42 50 72 90
58 63 49 17 31
39 76  8 19 41
 9 59 61 23 54
91 57 18 70 69

90  6 36 71 78
73 75 56 43 35
92 31 21 47 86
69 10 52 80 55
68 30 22 45 34

 4 15 88  6 38
46 37 34 23 91
50 98 89  3 79
90 93 60 56 20
40  8 30 69  1

13 62 39 56 78
 6  7 17 94  5
44 77 76 81 20
91 64 34 99 45
63 37  3  2 66

57 19 63 59  8
83 51 58 21  4
54 61 56  9 95
92 52 84 67 66
80 34  1 97 69

 0 95 89 40 51
58 90 97 85 61
64 47 10 37 26
19 63  7 71 81
20 25 57 55 21

72  6 39 97 58
50 63  2 46 86
73 12 59 37 66
93 77 47 34 67
 5  4 98 51 48

96  5 17 68 73
55 13 88  3 52
95 62 18 83 63
31 15 99 20 93
29 50  0 74 22

11 84 79 92 67
36 23 76 14 80
82 72 53  3 85
46 71 89 25 40
51 81 29  0 65

68 24 96 87  5
53 10 95 89 81
88 80 23 12 50
65 16 45 29 62
33 97 91 60 43

36 77 68 20 51
93 71 28 70 97
10  9 16 15 67
42 78 62 34 38
60 74 18 91 53

65 35 40 34 71
 0 84 13 81 95
 2 31 46 24 76
67 28 83 63 25
62 93 10 14 68

17 36 72 65 49
29  9 22 42 58
76 20 57  3 54
13 37 88 62 24
66 78 55 30 48

55 18 97 40 30
76 69 22 86 98
48 96 20 65  1
77 45 91 82 25
56 70 66 34 58

15 59 37 69 66
51 16 25  0 79
76 72 68 70 20
95 33 82 27 52
53 65 40 45 92

65 18 54  9 28
47 11 84 89 71
52 96 83 57 86
55  0 56 72 20
26 19 81 60 64

97 28 89 55 11
33 92 50 86 79
81 37  0 94 64
44 76 68 58 26
57 65 60 78 93

62  4 55 50 74
86 46 89 20 68
 1 52 78 73 19
14 10  0 40 28
69 35 26 22  7

29 15  9 27  8
98 22 69 14 44
75 24 66 63 90
62 72 87 32 31
26 59 85 82 77

90 42 40 10 48
73  8 57 18 29
67 76  5 72 93
43 27 28 82 80
62 41 36 61 21

25 64 69  6 65
40 36 16 81 34
63 38 80 55 29
20 50 90 21 72
 4 17 83 27 92

96 89  9 62 78
18 47 82 80 73
75 38 51  3 50
48 19 99 54  6
 4 28 63 98 43

37 68 13 30 23
82 14 65 60 27
43 74 62 46 99
80 26 15  9 20
58 44 92 76 64

 2 80 99 17 43
37 48 65 52 40
81 90 83 78 72
77 21 56 66 68
92 22 10 61 49

72 27 88  7 57
51 73 31 55 23
39 48 12 91  2
92 42 71 93  4
26 38 36 22 75

37  2  9 10 52
33 45 11 67 25
31  6  5 79 14
70 39 99  8 81
65 87 83 68 77

54 89 78 49 63
39 33 27 98 28
79 61 20  2 25
92 12 13 29 30
51 77 94 38 46

28 87 30 75  9
48  8 23 60 89
79  2 21 18  6
25 69 24 15 71
44 36 59 31 68

16  0 69 19  9
68 15 90  8 87
75 21 12 97 39
 5 83 55 23 72
43 60 58 13 76

53 29 98 73 13
58 30 10 68 21
32 81 66  6 82
97 45 15  7 92
19 75 90 36 67

66 14 39 62 89
94 42 20 46 48
 0  7 92  4 86
 3 84 60 37 55
27 64  1 30 82

78 82 57 44 47
86 11 62 52 99
 7 70 17 60 15
45 19  4 91 75
 3  6 24 94 81

38  2 59 51 17
76 64 19 78  7
55 42 39 47 56
79 65 37 57 40
53 66 73 83 68

38 49 65 79 82
15 63 53 32 21
48  1  3 81 69
94 87 20  6 59
 8 50 96 71 76

17 28 41 24 69
20 96  9 57 85
70 15 53 38 52
79 84 37 73 64
40 30 25 56  1

68 11 49 37 46
24 63 72 35 29
92 62 89 73 28
64 58  9  3 39
13 45 10 19 20

54 41 49 33 60
85 56  0 77 51
81 12 13 20 27
36 24 69 39 80
14 83 57 50 91

19 68 61 56 11
 3 74  6 25 22
71 10 21  7 29
92 12 51 84 30
41 72 85 36 91

16 86 37 88 22
48 18  4 89 55
58 83 44  7 43
28 76 15 11 35
81 52 29 23 64

52 42 98  0 31
92 47 41 87 33
 6 35 69 44 17
91 50 89 75  3
57 61 81 60 21

40 86 78  2 58
76 73 31 19 14
50 21 53 83 45
68  9 22 70 69
54  1 85 90 44

13 20 96 89 22
85 62 19 99 66
18 46 28 14 39
12 21 34  1 81
40 77 25  4  7

21 76 60 10  9
34 29 59 48 40
30  2 36 82 66
12 95 80 72 58
74  3 46 37 49

 6 30 25 12 22
33 65  4 89 59
86 94 70 49 16
11 76 66 84 45
50 31 46 73 36

89  4 99 23 84
72 90 83 44 20
33 66 91 35 26
81 85 24 10 55
45 43  7 78 53

55 62 19 44 63
12 90 77 28  7
80 92 15 41 11
58 24 47 66 82
48 88 37 60 46

48 16 86 94 14
22 43 46 67  1
91 88 49 79 28
19 12 35 85 42
13 26 68 95 97

23 67 33 85 82
21 71 84  8 58
20 41 53 22 99
92 89 59 16 19
79 93 39 83 80

98 96 24 47 15
79 97 19 64 84
62 91 38 30 65
74 25 92 16 50
51 41 34 18 35

55  9 27 95 90
31 11 50 84 71
37 61 62 60 88
24 94 29 42 77
17 83 47 74 91

74 19  3 13 29
48 17 26 42 22
 9 25  8 55 38
33 52 90 84 39
82 50 60 41 35

33  7 28 66 21
98 32 41 81 19
46 34 10 50 47
20 68  2 93 25
 5 85 69 53 39

91 83 59 37  8
51 39 81 48 19
55 86 73 54 20
 5  7 18  1 36
44 75 43 76 23

 6 38 71 57 77
95 75  0 32  5
64 41 51 91 30
99 79  8 16 55
88 97 53 47 85

58 23 14 93 59
67 47 49  2 24
75 92 31 52 29
30  7 10 40 55
20 19 35 72 84

75  6 67 76 13
18 32 27 17 71
60  4 48 53 84
 8 23 33 91 68
24 42 56 50 45

52 55 68 62 89
 9 64 14 58 50
46  8 94 12 24
72 47 42 76 61
97 40 25  7 31

13 83 14 29 58
70 33 28 71  9
16 90 45 30 99
84  0 41 79 51
60 55 35 31 57

93 21 42 67 20
88 73 40  9  1
92 58 15 83 57
30 86 36 97 89
38 22 72 37 24

37 38 78 93 50
44 65 52 54 79
73 27  6 35 91
 8 26 63  7 12
25 17 60  4 14

 0 30 70 99 23
 2 75 51 10 87
12 91  4 69  8
81 62 26 72 33
31 17 46 73 96

53 44 78 46 19
40 85 77 98 50
71 30 68  0 73
31 43 83 92  6
52 45 11 37  1

91 67  8 35 36
23 52 51 83 70
92 32 27 72 16
63 54 75 38 97
45 96 11 13 79

 2 62  8 53  3
63 94 81 61 25
10 91  9 87 84
85 59 80 54  0
43 77 21 89 75

12 34 29 68 14
77 81 67 15  9
17 85 26 30 86
33 10 31 23 69
59 42 24 88 89

14 80 84 22 23
85 93 83 91  6
57 27 51 95 46
67  1 24 76 86
55 19 94  8 61

87 42 82 81 98
43  8 51 92 60
17 14 96 36 34
 2 19 70 15 78
93 35 74 53  3

53 34 22 41 59
58 18 30 71 37
60  8 74  1  5
96 52 87 17 85
57 31 24 72 32

58 51 98 28 29
81 76 49 24 60
 3 33 22 57 86
 1 67 46 20 56
 5 16  2  8  6

67 51 43 89 94
 4 96 50  9  8
22 87 77 38 35
39 37 17 59 32
 5 25 26 83 81

15 12  6 27 76
80 70 87 36 55
69 35 91 98 18
89 59 92  5 29
84 10 86 63 39

 3 94 38 93 28
88 57 42 97 14
89 36 35 85  9
 5 29 51 31 69
46 10 25  0 15

87 46 49 60 22
30 64 93 20 66
95 86 71 21 11
 0 58 53 18 97
62 63  3  1 96

56 86 71 30 36
19 27 16 94 53
46 81 25 44 55
75  7 97 76 96
93 79 22 78 50

30 14 68 16 59
23 60 77 37  4
22 43 53 34 81
 7 54 38 39 96
25 86 64 46 44

 2 72 69 90 58
50 77 16  0 14
75  1 92 66 29
71 59 54 67  4
 3 53 49  9 46

21 22 25 42  7
 4 95 82 91 27
29 33 30 64 61
74 80 26 83 70
31 88 93 52 96

51 45 43 70 87
48 77 27 53 19
41 83 17 99 49
94 59 95 58 55
75 86 44 91 82

64 88 91 68 19
57 60 80 46 98
20  4 38 32 69
 8  9 22 70 39
85 28 97  2 71

65 42 46 75 48
26 66 97 16 74
51 67 94 89  4
61  9 54 22  2
82  8 83  5 90

18 51 61 57 11
41 79 30 78 69
75 14 81 40 88
93 76 25 64 47
24 34 94 46 89

74  8  3 64 59
67 49 26 32 83
85  0  5 71 90
16 27 81 98 56
79 23 76 20 43

37  6 24 16 69
41 82 51  4 35
79 94 99 42 12
30 81 60  3 36
 8 22 11 32 48

68  9  1 47 21
61 55  5 19 73
29  0 48  4 31
63 50 93 15 72
39 98 57 70 65

34 55 82 26 10
62 85 68 69 36
 5 46 54 50 17
86 95 72 49 29
76 91 43 37 97

41 76  5 33 59
81 51 99 86 34
 0 39 64 27 83
40 69 37 91 45
55 49 54  9 61

92 34 81 10 80
64 85 69 28 66
89 93 22 45  7
 8 35 90 16 87
 4 78 44 13 67

30 21 24 26 40
59 17  4 47 73
10 31 88 12 29
56 98 69  2  7
13 58 91 55 36

25 28 69  4 19
45 62 32 16 98
20 88  6 97 18
91 71 10 80 31
 1 66 89 12 21

85 34 16 30 71
47 15 46 24 61
79 69 23 38 96
 0 14 80 97 86
48 92 22 26 98

96 94 98 27 56
64 83 46 30  5
 3 43 70 67 21
62  0 92  1 65
36 26 35 61 76`;

const numInput = [
  0, 56, 39, 4, 52, 7, 73, 57, 65, 13, 3, 72, 69, 96, 18, 9, 49, 83, 24, 31, 12,
  64, 29, 21, 80, 71, 66, 95, 2, 62, 68, 46, 11, 33, 74, 88, 17, 15, 5, 6, 98,
  30, 51, 78, 76, 75, 28, 53, 87, 48, 20, 22, 55, 86, 82, 90, 47, 19, 25, 1, 27,
  60, 94, 38, 97, 58, 70, 10, 43, 40, 89, 26, 34, 32, 23, 45, 50, 91, 61, 44,
  35, 85, 63, 16, 99, 92, 8, 36, 81, 84, 79, 37, 93, 67, 59, 54, 41, 77, 42, 14
];
