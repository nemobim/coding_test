function solution(numbers, k) {
  const index =  (2 * k - 1) % numbers.length;
  return index === 0 ? numbers[numbers.length -1] : index
}