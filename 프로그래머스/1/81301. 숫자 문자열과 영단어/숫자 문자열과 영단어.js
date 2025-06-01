//숫자-문자 매칭
const numberMap = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function solution(s) {
  const result = s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (word) => numberMap[word]);
  return + result;
}
