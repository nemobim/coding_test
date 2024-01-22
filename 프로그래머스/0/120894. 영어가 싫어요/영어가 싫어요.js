function solution(numbers) {
  const strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  strNum.forEach((num, idx) => {
    numbers = numbers.replace(new RegExp(num, "g"), idx);
  });
  return Number(numbers);
}

/**다른풀이 */

function solution(numbers) {
  const strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  strNum.forEach((num, idx) => (numbers = numbers.split(num).join(idx)));
  return Number(numbers);
}

/**다른 사람 풀이 */
function solution(numbers) {
  let numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  numStr.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return Number(numbers);
}
