function solution(code) {
  let mode = 0; // 초기 모드는 0
  let ret = ""; // 결과 문자열 초기화

  for (let idx = 0; idx < code.length; idx++) {
    const char = code[idx]; // 현재 문자

    if (mode === 0) {
      // 모드가 0인 경우
      if (char !== "1" && idx % 2 === 0) {
        // code[idx]가 "1"이 아니면서 짝수 인덱스인 경우
        ret += char; // 결과 문자열에 추가
      } else if (char === "1") {
        // code[idx]가 "1"인 경우
        mode = 1; // 모드를 0에서 1로 변경
      }
    } else {
      // 모드가 1인 경우
      if (char !== "1" && idx % 2 !== 0) {
        // code[idx]가 "1"이 아니면서 홀수 인덱스인 경우
        ret += char; // 결과 문자열에 추가
      } else if (char === "1") {
        // code[idx]가 "1"인 경우
        mode = 0; // 모드를 1에서 0으로 변경
      }
    }
  }

  // 결과 문자열이 비어있으면 "EMPTY" 반환, 아니면 결과 문자열 반환
  return ret.length === 0 ? "EMPTY" : ret;
}