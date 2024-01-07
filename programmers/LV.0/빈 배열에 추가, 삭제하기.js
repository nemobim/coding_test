//https://school.programmers.co.kr/learn/courses/30/lessons/181860

/**나의 풀이 */
function solution(arr, flag) {
  return flag.reduce((answer, isAdd, i) => {
    const count = isAdd ? arr[i] * 2 : arr[i];
    return isAdd
      ? answer.concat(Array(count).fill(arr[i]))
      : answer.slice(0, -count);
  }, []);
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
//[  3, 3, 3, 3, 4, 4, 4, 4 ]

/**다른 풀이 */
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}
