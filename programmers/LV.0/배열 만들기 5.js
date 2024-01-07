//https://school.programmers.co.kr/learn/courses/30/lessons/181912

/**나의 풀이 */
function solution(intStrs, k, s, l) {
  return intStrs.map((item) => +item.substr(s, l)).filter((x) => x > k);
}
