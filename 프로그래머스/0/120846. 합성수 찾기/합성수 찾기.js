function solution(n) {
  let answer = 0;
  for (i = 4; i <= n; i++) {
    if (i % 2 === 0) ++answer;
    else if (i % 3 === 0) ++answer;
    else if (i !== 5 && i % 5 === 0) ++answer;
    else if (i !== 7 && i % 7 === 0) ++answer;
    else if (Number.isInteger(Math.sqrt(i))) ++answer;
  }
  return answer;
}

/**다른 사람 풀이 */
function solution(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter((el) => el === 0).length;
}
