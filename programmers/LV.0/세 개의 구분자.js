//https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
  const str = myStr
    .replace(/[abc]/g, " ")
    .split(" ")
    .filter((x) => x !== "");
  return str.length === 0 ? ["EMPTY"] : str;
}
