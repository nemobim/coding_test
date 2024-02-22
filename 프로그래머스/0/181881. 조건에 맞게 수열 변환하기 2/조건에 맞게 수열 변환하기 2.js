function solution(arr) {
  let count = 0;

  const loopArr = (arr, count) => {
    let arr1 = arr.map((v) => {
      if (v >= 50 && v % 2 === 0) {
        return v / 2;
      } else if (v < 50 && v % 2 === 1) {
        return v * 2 + 1;
      } else {
        return v;
      }
    });

    if (arr1.every((v, i) => v === arr[i])) return count;

    count++;

    return loopArr(arr1, count);
  };

  // Add return statement here
  return loopArr(arr, count);
}
