function solution(s) {
  return s
    .split(" ") // 공백으로 단어를 분리
    .map(word => 
      [...word]
        .map((char, i) => 
          i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" "); // 단어 사이에 공백을 넣어 합치기
}