function solution(myString, pat) {
  const last = myString.lastIndexOf(pat);
  return myString.substring(0, last) + pat
}
