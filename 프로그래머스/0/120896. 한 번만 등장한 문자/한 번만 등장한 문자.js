function solution(s) {
  const arr = [...s].sort();
  const answer = [];
  arr.forEach((v, i) => {
    if (v === arr[i + 1] || v === arr[i - 1]) return;
    answer.push(v);
  });

  return answer.join("");
}

/**다른 풀이 */
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
