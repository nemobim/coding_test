function solution(arr) {
  const max = Math.max(arr.length, arr[0].length);

  //행, 열이 같은 경우
  if (arr.length === arr[0].length) {
    return arr;
  }

  //같지 않은 경우
  for (let i = 0; i < max; i++) {
    if (arr[i] === undefined) {
      arr[i] = new Array(max).fill(0);
    } else if (arr[i].length < max) {
      arr[i] = arr[i].concat(new Array(max - arr[i].length).fill(0));
    }
  }

  return arr;
}
