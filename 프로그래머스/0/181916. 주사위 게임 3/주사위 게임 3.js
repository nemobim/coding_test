function solution(a, b, c, d) {
  //{주사위값 : 갯수}로 정리
  const dice = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  // 주사위 value 순으로 정렬
  const diceValue = Object.keys(dice).sort((a, b) => dice[b] - dice[a]);

  //주사위값이 4개가 같은 경우
  if (dice[diceValue[0]] === 4) return Number(diceValue[0]) * 1111;

  //세개가 같고 하나가 다른 경우
  if (dice[diceValue[0]] === 3) return Math.pow(Number(diceValue[0]) * 10 + Number(diceValue[1]), 2);

  //두개씩 같고 다른 경우
  if (dice[diceValue[0]] === 2 && dice[diceValue[1]] === 2) return (Number(diceValue[0]) + Number(diceValue[1])) * Math.abs(Number(diceValue[0]) - Number(diceValue[1]));

  //두개만 같고 나머지가 다른 경우
  if (dice[diceValue[0]] === 2) return Number(diceValue[1]) * Number(diceValue[2]);

  //모두 다른 경우 가장 작은 key값을 리턴
  return Number(diceValue[0])
}
