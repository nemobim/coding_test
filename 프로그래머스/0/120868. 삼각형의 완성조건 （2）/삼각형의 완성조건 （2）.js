function solution(sides) {
  let answer = [];
  //오름차순 정렬
  const [a, b] = sides.sort((a, b) => a - b);
  //가장 긴 변이 b인 경우
  for (i = b + 1 - a; i <= b; i++) {
    answer.push(i);
  }
  //나머지 한 변이 가장 긴 경우
  for (i = b + 1; i < a + b; i++) {
    answer.push(i);
  }

  //중복 제거
  answer = [...new Set(answer)];

  return answer.length
}
