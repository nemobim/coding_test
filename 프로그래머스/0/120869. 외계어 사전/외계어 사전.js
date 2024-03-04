function solution(spell, dic) {
  for (word of dic) {
    if (spell.every((char) => new RegExp(char).test(word))) {
      return 1;
    }
  }
  return 2;
}
