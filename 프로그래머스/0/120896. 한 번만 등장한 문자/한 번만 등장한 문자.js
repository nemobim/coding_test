function solution(s) {
  const arr = [...s].sort();
  const answer = [];
  arr.forEach((v, i) => {
    if (v === arr[i + 1] || v === arr[i - 1]) return;
    answer.push(v);
  });

  return answer.join("");
}