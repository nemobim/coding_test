//https://school.programmers.co.kr/learn/courses/30/lessons/120842

/**나의 풀이 */
function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length / n; i++) {
    answer.push([...num_list.slice(i * n, i * n + n)]);
  }
  return answer;
}

/**다른 풀이 */
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
