//flag[i] 값이 true면 arr[i]을 arr[i]*2번 추가
//flag[i] 값이 false라면 마지막 arr[i]개의 원소를 제거

function solution(arr, flag) {
  const X = [];
  arr.forEach((x, i) => {
    flag[i] ? X.push(...Array(x * 2).fill(x)) : X.splice(X.length - x, x);
  });
  return X;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
//[  3, 3, 3, 3, 4, 4, 4, 4 ]

/**다른 풀이 */
function solution(arr, flag) {
  return arr.reduce((prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)), []);
}
