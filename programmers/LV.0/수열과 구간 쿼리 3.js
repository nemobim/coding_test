//https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
  queries.forEach(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  return arr;
}
