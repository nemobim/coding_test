function solution(rank, attendance) {
  //배열 합쳐서 객체 만들기
  const obj = rank.reduce((acc, cur, i) => {
    if (attendance[i]) {
      //true인 경우만 랭크 : 번호 로 넣기
      acc[cur] = i;
    }
    return acc;
  }, {});
  //객체 속성에서 숫자 키는 자동적으로 오름차순 정렬됨
  const [a, b, c, ...rest] = Object.values(obj);
  //10000 × a + 100 × b + c
  return a * 10000 + b * 100 + c;
}
