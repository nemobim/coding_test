function solution(common) {
  //등차 또는 등비 수열
  const [a, b, c] = common;
  if (b - a === c - b) {
    //등차 수열
    return common[common.length - 1] + (b - a);
  } else {
    //등비 수열
    return common[common.length - 1] * (b / a);
  }
}