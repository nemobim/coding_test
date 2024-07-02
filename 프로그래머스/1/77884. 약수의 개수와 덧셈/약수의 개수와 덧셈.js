function countDivisors(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) count += i * i === n ? 1 : 2;
  }
  return count;
}

function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    countDivisors(i) % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return sum;
}