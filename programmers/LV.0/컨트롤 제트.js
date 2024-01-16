//https://school.programmers.co.kr/learn/courses/30/lessons/120853

/**나의 풀이 */
function solution(s) {
  const Zarr = s.split(" ");
  return Zarr.reduce((a, c, i) => {
    if (Zarr[i + 1] !== "Z" && c !== "Z") {
      a += +c;
    }
    return a;
  }, 0);
}
