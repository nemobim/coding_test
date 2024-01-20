//https://school.programmers.co.kr/learn/courses/30/lessons/120894

/**나의 풀이 */
function solution(numbers) {
  const strNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  strNum.forEach((num, idx) => {
    numbers = numbers.replace(/[num]/g, idx);
  });
  return Number(numbers);
}

function solution(numbers) {
  const strNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  strNum.forEach((num, idx) => (numbers = numbers.split(num).join(idx)));
  return Number(numbers);
}

/**다른 사람 풀이 */
function solution(numbers) {
  let numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numStr.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return Number(numbers);
}
