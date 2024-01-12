//https://school.programmers.co.kr/learn/courses/30/lessons/120815

/**나의 풀이 */
function solution(n) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return lcm(n, 6) / 6;
}
