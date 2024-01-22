// function solution(arr) {
//   const total = arr.length;
//   if (Number.isInteger(Math.log2(total))) return arr;

//   const square = Math.pow(2, Math.ceil(Math.log2(total)));

//   return [...arr, ...new Array(square - total).fill(0)];
// }

function solution(arr) {
    const length = arr.length;
    
    // 주어진 배열의 길이가 2의 정수 거듭제곱이 될 때까지 0을 추가
    while ((arr.length & (arr.length - 1)) !== 0) {
        arr.push(0);
    }
    
    return arr;
}