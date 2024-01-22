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
    numbers = numbers.replace(new RegExp(num, "g"), idx);
  });
  return Number(numbers);
}
