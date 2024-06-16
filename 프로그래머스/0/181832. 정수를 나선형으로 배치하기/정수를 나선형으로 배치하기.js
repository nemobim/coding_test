function solution(n) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let [row, col, dir] = [0, 0, 0];
  let currentNumber = 1;

  for (let i = 0; i < n * n; i++) {
    result[row][col] = currentNumber++;
    const [nextRow, nextCol] = [row + directions[dir][0], col + directions[dir][1]];

    if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || result[nextRow][nextCol] !== 0) {
      dir = (dir + 1) % 4;
    }

    row += directions[dir][0];
    col += directions[dir][1];
  }

  return result;
}