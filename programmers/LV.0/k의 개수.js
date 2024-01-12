//https://school.programmers.co.kr/learn/courses/30/lessons/120887

/**나의 풀이 */
function solution(i, j, k) {
  let answer = 0;
  for (let index = i; index <= j; index++) {
    answer += `${index}`.split(k).length - 1;
  }
  return answer;
}
