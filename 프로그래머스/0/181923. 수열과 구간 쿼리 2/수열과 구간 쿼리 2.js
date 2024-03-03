function solution(arr, queries) {
  let answer = [];
  for (query of queries) {
    const [s, e, k] = query;
    const line = arr.slice(s, e + 1).filter((v) => v > k);
    answer.push(line.length > 0 ? Math.min(...line) : -1);
  }
  return answer;
}
