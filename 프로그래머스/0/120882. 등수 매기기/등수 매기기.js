function solution(score) {
  const avg = score.map((test) => test.reduce((a, b) => a + b, 0) / test.length);
  //등수 구하기
  const rank = avg.map((a, i) => {
    let count = 1;
    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) count++;
    }
    return count;
  });
  return rank;
}
