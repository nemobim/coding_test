function solution(a, b) {
  //기약분수 만들어주기,최소공약수로 나누기
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  let num = b / gcd(a, b);

  // 분모의 소인수가 2와 5만을 포함하는지 확인
  while (num % 2 === 0) {
    num /= 2;
  }
  while (num % 5 === 0) {
    num /= 5;
  }

  // 소수가 남아있지 않으면 유한소수
  return num === 1 ? 1 : 2;
}
