function solution(s) {
  const arr = s.split(" ").map(Number); // 문자열을 숫자로 변환
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}