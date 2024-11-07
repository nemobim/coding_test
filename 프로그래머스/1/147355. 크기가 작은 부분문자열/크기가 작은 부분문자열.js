function solution(t, p) {
  //p 길이
  let answer = 0;
  const pLength = p.length;
  //p길이 부분 문자열 찾기, 부분 문자열 길이만큼만 반복
  for (let i = 0; i < t.length - pLength + 1; i++) {
    //p길이와 같은 부분 문자열
    const tWord = t.slice(i, i + pLength);
    if (tWord <= p) answer += 1;
  }
  return answer;
}
