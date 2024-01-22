/**나의 풀이 */
function solution(numbers, direction) {
  if (direction === "left") {
    numbers.push(numbers.shift());
  } else if (direction === "right") {
    numbers.unshift(numbers.pop());
  }
  return numbers;
}