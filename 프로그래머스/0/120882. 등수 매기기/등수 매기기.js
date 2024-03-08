function solution(score) {
  const avg = score.map((test) => test.reduce((a, b) => a + b, 0) / test.length);

  const sortedAvg = [...avg].sort((a, b) => b - a);
  const rank = avg.map((a) => sortedAvg.indexOf(a) + 1);

  return rank;
}
