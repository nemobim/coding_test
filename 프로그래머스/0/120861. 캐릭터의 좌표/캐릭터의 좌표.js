function solution(keyinput, board) {
  const init = [0, 0];
  //맵 크기를 넘어가는 경우는 무시
  const width = Math.floor(board[0] / 2);
  const height = Math.floor(board[1] / 2);

  keyinput.forEach((step) => {
    switch (step) {
      case "left":
        if (init[0] - 1 >= -width) init[0] -= 1;
        break;
      case "right":
        if (init[0] + 1 <= width) init[0] += 1;
        break;
      case "up":
        if (init[1] + 1 <= height) init[1] += 1;
        break;
      case "down":
        if (init[1] - 1 >= -height) init[1] -= 1;
        break;
    }
  });
  return init;
}
