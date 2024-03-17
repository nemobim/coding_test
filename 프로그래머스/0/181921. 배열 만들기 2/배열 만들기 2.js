function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    let str = String(i);
    if (/^[50]+$/.test(str)) {
      answer.push(i);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}
