function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    //숫자 나열
    let sum = 0;
    for (let j = i; j <= n; j++) {
      //해당 숫자부터 n까지의 합
      sum += j;
      if (sum === n) answer++; //합이 n이면 answer 증가
      if (sum >= n) break; 
    }
  }
  return answer;
}
