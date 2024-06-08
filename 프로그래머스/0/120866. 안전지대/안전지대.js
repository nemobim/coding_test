function solution(board) {
  board.forEach((line, i) => {
    line.forEach((cell, j) => {
      if (cell === 1) {
        // 왼쪽
        if (j > 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = "x";
        }
        // 오른쪽
        if (j < line.length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = "x";
        }
        // 위
        if (i > 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = "x";
        }
        // 아래
        if (i < board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = "x";
        }
        // 위의 왼쪽
        if (i > 0 && j > 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = "x";
        }
        // 위의 오른쪽
        if (i > 0 && j < line.length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = "x";
        }
        // 아래의 왼쪽
        if (i < board.length - 1 && j > 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = "x";
        }
        // 아래의 오른쪽
        if (i < board.length - 1 && j < line.length - 1 && board[i + 1][j + 1] !== 1) {
          board[i + 1][j + 1] = "x";
        }
      }
    });
  });
  //배열을 돌며 0인 부분의 갯수 반환
  const arr = board.reduce((acc, line) => acc.concat(line), []);
  return arr.filter((el) => el === 0).length;
}

