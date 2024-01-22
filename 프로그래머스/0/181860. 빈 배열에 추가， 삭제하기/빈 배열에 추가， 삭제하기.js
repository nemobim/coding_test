//flag[i] 값이 true면 arr[i]을 arr[i]*2번 추가
//flag[i] 값이 false라면 마지막 arr[i]개의 원소를 제거

function solution(arr, flag) {
  const X = [];
  arr.forEach((x, i) => {
    flag[i] ? X.push(...Array(x * 2).fill(x)) : X.splice(X.length - x, x)
  });
  return X;
}