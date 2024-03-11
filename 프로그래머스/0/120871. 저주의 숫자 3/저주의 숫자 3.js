function solution(n) {
  let step = 0; //진행된 단계 수
  let answer = 0; //결과값
  let num = 0; //숫자
  while (step < n) {
    num += 1;
    // 3의 배수이거나 3이 들어가는 경우
    if (num % 3 === 0 || String(num).includes("3")) {
    } else {
      step += 1;
      answer = num;
    }
  }
  return answer;
}
