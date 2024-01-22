function solution(array, n) {
  const arr = [...array, n].sort((a, b) => a - b);
  const findNum = arr.indexOf(n);

  const arrBf = arr[findNum + 1] || 0; //값이 없을 수도 있으므로
  const arrAf = arr[findNum - 1] || 0;

  if (arrAf === 0) return arrBf;
  if (arrBf === 0) return arrAf;

  return Math.abs(n - arrBf) < Math.abs(n - arrAf) ? arrBf : arrAf;
}

// 다른 사람 풀이
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
