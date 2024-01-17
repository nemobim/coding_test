//https://school.programmers.co.kr/learn/courses/30/lessons/181857

/**나의 풀이 */
function solution(arr) {
  //요소의 수
  const total = arr.length;
  //2의제곱인지 판별해서 맞다면 리턴
  if (Number.isInteger(Math.log2(total))) return arr;

  //필요한 제곱수
  const square = Math.pow(2, Math.ceil(Math.log2(total)));

  return [...arr, ...new Array(square - total).fill(0)];
}

//const square = Math.pow(2, Math.ceil(Math.log2(total)));
//const square = Math.pow(2, Math.ceil(Math.sqrt(total))); 원래 작성한 코드

/**다른 풀이 */
function solution(arr) {
  const length = arr.length;

  // 주어진 배열의 길이가 2의 정수 거듭제곱이 될 때까지 0을 추가
  while ((arr.length & (arr.length - 1)) !== 0) {
    arr.push(0);
  }

  return arr;
}
