//https://school.programmers.co.kr/learn/courses/30/lessons/181903

/**나의 풀이 */
function solution(q, r, code) {
  return [...code].filter((x, i) => i % q === r).join("");
}
