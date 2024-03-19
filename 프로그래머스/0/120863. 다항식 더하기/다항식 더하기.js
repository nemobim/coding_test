function solution(polynomial) {
  let 상수항 = 0;
  let 일차항 = 0;

  polynomial.split(" ").forEach((term) => {
    if (term.includes("x")) return (일차항 += parseInt(term.split("x")[0] || 1));
    if (!isNaN(term)) return (상수항 += parseInt(term));
  });

  if (일차항 && 상수항) return 일차항 === 1? `x + ${상수항}` :`${일차항}x + ${상수항}`;
  if (일차항) return 일차항 === 1? "x" :`${일차항}x`;
  if (상수항) return `${상수항}`;
}
