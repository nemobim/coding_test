//https://school.programmers.co.kr/learn/courses/30/lessons/120912

/**나의 풀이 */
function solution(array) {
  return array.join("").split("7").length - 1;
}

console.log(solution([1, 7, 7, 2, 1, 7, 1])); // 3
