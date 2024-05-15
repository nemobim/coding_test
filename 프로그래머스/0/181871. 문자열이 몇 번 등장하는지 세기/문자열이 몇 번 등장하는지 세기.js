function solution(myString, pat) {
  let count = new Set();
  for (let index = 0; index < myString.length; index++) {
    let foundIndex = myString.indexOf(pat, index);
    if (foundIndex !== -1) {
      count.add(foundIndex);
    }
  }
  return count.size;
}
