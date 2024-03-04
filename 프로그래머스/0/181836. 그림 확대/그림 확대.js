function solution(picture, k) {
  //가로세로 2배씩 해주면 된다
  //한줄 당 k배로 만들고 그 줄을 k배 추가한다
  let answer = [];
  picture.forEach((item) => {
    const line = [...item].map((char) => char.repeat(k)).join("");
    for (let i = 0; i < k; i++) {
      answer.push(line);
    }
  });
  return answer;
}
