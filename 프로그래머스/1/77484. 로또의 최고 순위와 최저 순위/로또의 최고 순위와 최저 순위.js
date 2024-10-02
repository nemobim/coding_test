function solution(lottos, win_nums) {
  let zeroCount = 0;
  let correctCount = 0;
  lottos.forEach((num) => {
    if (win_nums.includes(num)) correctCount++;
    if (num === 0) zeroCount++;
  });

  const reward = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  return [reward[correctCount + zeroCount], reward[correctCount]];
}
