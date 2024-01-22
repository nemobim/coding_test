function solution(order) {
  let answer = 0;
  order.forEach((x) => {
    if (x.includes("americano")) {
      answer += 4500;
    } else if (x.includes("cafelatte")) {
      answer += 5000;
    } else if (x.includes("anything")) {
      answer += 4500;
    }
  });
  return answer;
}

/**다른 풀이 */
const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);
