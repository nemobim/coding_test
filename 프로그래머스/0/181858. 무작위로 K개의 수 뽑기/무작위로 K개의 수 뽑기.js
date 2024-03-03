function solution(arr, k) {
  let answer = [];
  const set = new Set(arr);
  const array = [...set];
  for (let i = 0; i < k; i++) {
    answer.push(array[i] !== undefined ? array[i] : -1);
  }
  return answer;
}
