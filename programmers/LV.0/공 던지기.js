//https://school.programmers.co.kr/learn/courses/30/lessons/120843

/**나의 풀이 */
function solution(numbers, k) {
  const index = (2 * k - 1) % numbers.length;
  return index === 0 ? numbers[numbers.length - 1] : index;
}
