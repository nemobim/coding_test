//https://school.programmers.co.kr/learn/courses/30/lessons/120890

/**나의 풀이 */
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b));
  return array[0];
}

/**다른 풀이 */
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
