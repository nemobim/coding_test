function solution(arr, query) {
  for (i = 0; i < query.length; i++) {
    const index = query[i];
    if (i % 2 === 0) {
      // 짝수
      arr = arr.slice(0, index + 1);
    } else {
      // 홀수
      arr = arr.slice(index);
    }
  }
  return arr;
}
