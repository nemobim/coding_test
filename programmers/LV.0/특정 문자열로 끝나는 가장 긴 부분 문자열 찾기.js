//https://school.programmers.co.kr/learn/courses/30/lessons/181872

/** 나의 풀이 */
function solution(myString, pat) {
  const last = myString.lastIndexOf(pat);
  return myString.substring(0, last + pat.length);
}

console.log(solution("AbCdEFG", "dE")); // AbCdE
