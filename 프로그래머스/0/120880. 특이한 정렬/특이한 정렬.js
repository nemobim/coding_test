function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const A = Math.abs(a - n);
    const B = Math.abs(b - n);
    if (A === B) {
      return b - a; // 거리가 같을 때는 더 큰 수가 앞에 오도록 정렬
    }
    return A - B;
  });
}