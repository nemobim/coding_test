//https://school.programmers.co.kr/learn/courses/30/lessons/181905

/** 나의 풀이 */
function solution(my_string, s, e) {
  const reverseStr = [...my_string.slice(s, e + 1)].reverse().join("");
  return my_string.slice(0, s) + reverseStr + my_string.slice(e + 1);
}

function solution2(my_string, s, e) {
  const reverseStr = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  return my_string.slice(0, s) + reverseStr + my_string.slice(e + 1);
}

console.log(solution("Progra21Sremm3", 6, 12)); // ProgrammerS123
