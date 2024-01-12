//https://school.programmers.co.kr/learn/courses/30/lessons/120846

/**나의 풀이 */
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
