type boardItem = { num: number; called: boolean };
type row = {
  num1: boardItem;
  num2: boardItem;
  num3: boardItem;
  num4: boardItem;
  num5: boardItem;
};
interface BoardV2 {
  row1: row;
  row2: row;
  row3: row;
  row4: row;
  row5: row;
}

export const turnInputIntoObj = (input: string) => {
  const parsedBoards = parse(input);
  let boards = [];
  for (let i = 0; i < parsedBoards.length; i++) {
    const board = parsedBoards[i];
    const boardObj: BoardV2 = {
      row1: {
        num1: { num: board[0][0], called: false },
        num2: { num: board[0][1], called: false },
        num3: { num: board[0][2], called: false },
        num4: { num: board[0][3], called: false },
        num5: { num: board[0][4], called: false }
      },
      row2: {
        num1: { num: board[1][0], called: false },
        num2: { num: board[1][1], called: false },
        num3: { num: board[1][2], called: false },
        num4: { num: board[1][3], called: false },
        num5: { num: board[1][4], called: false }
      },
      row3: {
        num1: { num: board[2][0], called: false },
        num2: { num: board[2][1], called: false },
        num3: { num: board[2][2], called: false },
        num4: { num: board[2][3], called: false },
        num5: { num: board[2][4], called: false }
      },
      row4: {
        num1: { num: board[3][0], called: false },
        num2: { num: board[3][1], called: false },
        num3: { num: board[3][2], called: false },
        num4: { num: board[3][3], called: false },
        num5: { num: board[3][4], called: false }
      },
      row5: {
        num1: { num: board[4][0], called: false },
        num2: { num: board[4][1], called: false },
        num3: { num: board[4][2], called: false },
        num4: { num: board[4][3], called: false },
        num5: { num: board[4][4], called: false }
      }
    };
    boards.push(boardObj);
  }
  return boards;
};

export const markNumberAsCalled = (calledNum: number, board: BoardV2) => {
  for (const num in board.row1) {
    if (board.row1[num].num == calledNum) {
      board.row1[num].called = true;
    }
  }
  for (const num in board.row2) {
    if (board.row2[num].num == calledNum) {
      board.row2[num].called = true;
    }
  }
  for (const num in board.row3) {
    if (board.row3[num].num == calledNum) {
      board.row3[num].called = true;
    }
  }
  for (const num in board.row4) {
    if (board.row4[num].num == calledNum) {
      board.row4[num].called = true;
    }
  }
  for (const num in board.row5) {
    if (board.row5[num].num == calledNum) {
      board.row5[num].called = true;
    }
  }
  return board;
};

export const isBoardWinning = (board: BoardV2) => {
  if (
    // rows
    (board.row1.num1.called &&
      board.row1.num2.called &&
      board.row1.num3.called &&
      board.row1.num4.called &&
      board.row1.num5.called) ||
    (board.row2.num1.called &&
      board.row2.num2.called &&
      board.row2.num3.called &&
      board.row2.num4.called &&
      board.row2.num5.called) ||
    (board.row3.num1.called &&
      board.row3.num2.called &&
      board.row3.num3.called &&
      board.row3.num4.called &&
      board.row3.num5.called) ||
    (board.row4.num1.called &&
      board.row4.num2.called &&
      board.row4.num3.called &&
      board.row4.num4.called &&
      board.row4.num5.called) ||
    (board.row5.num1.called &&
      board.row5.num2.called &&
      board.row5.num3.called &&
      board.row5.num4.called &&
      board.row5.num5.called) ||
    // column
    (board.row1.num1.called &&
      board.row2.num1.called &&
      board.row3.num1.called &&
      board.row4.num1.called &&
      board.row5.num1.called) ||
    (board.row1.num2.called &&
      board.row2.num2.called &&
      board.row3.num2.called &&
      board.row4.num2.called &&
      board.row5.num2.called) ||
    (board.row1.num3.called &&
      board.row2.num3.called &&
      board.row3.num3.called &&
      board.row4.num3.called &&
      board.row5.num3.called) ||
    (board.row1.num4.called &&
      board.row2.num4.called &&
      board.row3.num4.called &&
      board.row4.num4.called &&
      board.row5.num4.called) ||
    (board.row1.num5.called &&
      board.row2.num5.called &&
      board.row3.num5.called &&
      board.row4.num5.called &&
      board.row5.num5.called)
  ) {
    return true;
  } else {
    return false;
  }
};

export const findWinningBoard = (nums: number[], boards: BoardV2[]) => {
  let index = 0;
  let board1: BoardV2;
  let numberOfWinningBoards = boards.length;
  while (numberOfWinningBoards != 0) {
    boards.forEach((board, ind) => {
      board1 = markNumberAsCalled(nums[index], board);

      boards.splice(ind, 1, board1);
    });
    boards.forEach((b, ind) => {
      if (isBoardWinning(b)) {
        boards.splice(ind, 1);
        board1 = b;
        numberOfWinningBoards--;
      }
    });
    index++;
  }
  return { board: board1, lastnum: nums[index - 1] };
};

export const finalAnswer = (board: BoardV2, numCalled: number) => {
  let total = 0;
  for (const num in board.row1) {
    if (board.row1[num].called == false) {
      total += board.row1[num].num;
    }
  }
  for (const num in board.row2) {
    if (board.row2[num].called == false) {
      total += board.row2[num].num;
    }
  }
  for (const num in board.row3) {
    if (board.row3[num].called == false) {
      total += board.row3[num].num;
    }
  }
  for (const num in board.row4) {
    if (board.row4[num].called == false) {
      total += board.row4[num].num;
    }
  }
  for (const num in board.row5) {
    if (board.row5[num].called == false) {
      total += board.row5[num].num;
    }
  }
  return total * numCalled;
};

// workign with it input as an array -------------------------------
type Board = number[][];

export const parse = (rawBoards: string): Board[] => {
  return rawBoards
    .replace(/\n /g, "\n")
    .replace(/  /g, " ")
    .split("\n\n")
    .map(board => {
      return board
        .split("\n")
        .map(row => row.split(" ").map(number => parseInt(number)));
    });
};
