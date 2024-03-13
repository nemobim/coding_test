function solution(A, B) {
  const str = [...A];
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    str.unshift(str.pop());
    if (str.join("") === B) return i + 1;
  }
  return -1;
}