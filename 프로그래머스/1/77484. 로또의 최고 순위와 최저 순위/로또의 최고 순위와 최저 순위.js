function solution(lottos, win_nums) {
  var answer = [];
  let joker_cnt = 0;
  let correct_cnt = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      correct_cnt++;
    } else if (lottos[i] === 0) {
      joker_cnt++;
    }
  }

  answer.push(correct_cnt === 0 && joker_cnt<2 ? 6 :7 - (joker_cnt + correct_cnt));
  answer.push(correct_cnt === 0 ? 6 : 7 - correct_cnt);

  return answer;
}