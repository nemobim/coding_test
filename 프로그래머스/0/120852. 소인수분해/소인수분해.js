function solution(n) {
  var arr = [];
  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
      arr.push(i);
      n = n / i;
    }
  }
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
}