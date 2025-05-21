function solution(s) {
  let num = s;
  let count = 0;
  let removedZero = 0;

  while (num !== "1") {
    let ones = 0;

    for (let char of num) {
      if (char === "1") ones++;
    }

    removedZero += num.length - ones;
    num = ones.toString(2);
    count++;
  }

  return [count, removedZero];
}