function solution(n) {
  let bin = '0' + n.toString(2); // 앞에 0 붙여서 안전하게 처리
  let idx = bin.lastIndexOf('01'); // '01' 찾기

  // '01' → '10' 으로 바꾸기
  bin = bin.slice(0, idx) + '10' + bin.slice(idx + 2);

  // 오른쪽 비트 추출
  const left = bin.slice(0, idx + 2);
  const right = bin.slice(idx + 2);

  // 오른쪽 비트 정렬
  const ones = right.match(/1/g)?.length || 0;
  const zeros = right.length - ones;

  const resultBin = left + '0'.repeat(zeros) + '1'.repeat(ones);
  return parseInt(resultBin, 2);
}

//비트연산
function nextBigNumber(n) {
  let c = n;
  let c0 = 0; // 오른쪽에 있는 0의 개수
  let c1 = 0; // 그 다음 나오는 1의 개수

  // Step 1. 오른쪽부터 0 개수 세기
  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  // Step 2. 그 다음 나오는 1 개수 세기
  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  // Step 3. 예외 처리 (모든 비트가 1인 경우 등)
  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }

  const p = c0 + c1; // 바꿀 비트 위치 (가장 오른쪽 0-1 경계)

  // Step 4. p번째 비트를 1로 바꾸기
  n |= (1 << p);

  // Step 5. p 이하 비트 전부 0으로 만들기
  n &= ~((1 << p) - 1);

  // Step 6. (c1 - 1)개의 1을 가장 오른쪽에 붙이기
  n |= (1 << (c1 - 1)) - 1;

  return n;
}

