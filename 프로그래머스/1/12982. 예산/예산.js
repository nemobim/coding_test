// function solution(d, budget) {
//   let result = 0;
//   let leftBudget = budget;

//   // 비용이 적은 순으로 정렬
//   const costSort = [...d].sort((a, b) => a - b);

//   for (const cost of costSort) {
//     if (leftBudget < cost) break; // 조기 리턴
//     leftBudget -= cost;
//     result++;
//     // console.log(leftBudget, result); 
//   }

//   return result;
// }

function solution(d, budget) {
  d.sort((a, b) => a - b); // 오름차순 정렬

  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) return i; // 초과 시 그 전까지가 정답
  }

  return d.length; // 모두 처리 가능한 경우
}