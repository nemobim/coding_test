//https://school.programmers.co.kr/learn/courses/30/lessons/181855

/**나의 풀이 */
function solution(strArr) {
  const obj = {};
  strArr.forEach((x, i) => {
    obj[x.length] = obj[x.length] + 1 || 1;
  });
  return Math.max(...Object.values(obj));
}

/**다른 사람 풀이 */
