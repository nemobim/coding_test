//https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  if (direction === "left") {
    numbers.push(numbers.shift());
  } else if (direction === "right") {
    numbers.unshift(numbers.pop());
  }
  return numbers;
}
