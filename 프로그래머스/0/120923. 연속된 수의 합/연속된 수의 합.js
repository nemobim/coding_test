function solution(num, total) {
  //등차수열의 합 공식 이용
  //식을 정리하면 첫째항 a1을 구할 수 있다.
  const a = total / num - (num - 1) / 2;
  return Array.from({ length: num }, (_, i) => a + i);
}
