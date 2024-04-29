function solution(cards1, cards2, goal) {
  let cd1_idx = 0;
  let cd2_idx = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[cd1_idx] === goal[i]) {
      cd1_idx++;
    } else if (cards2[cd2_idx] === goal[i]) {
      cd2_idx++;
    } else {
      return "No";
    }
  }

  return "Yes";
}