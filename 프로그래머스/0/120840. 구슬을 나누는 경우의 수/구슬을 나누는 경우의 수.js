function solution(balls, share) {
  //팩토리얼 함수
  const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  //조합 함수
  const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
  };

  // 정수 값으로 반환되도록 수정
  return Math.round(combination(balls, share));
}
