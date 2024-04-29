function solution(k, score) {
  var answer = [];
  let temp = [];

  for (let i = 0; i < score.length; i++) {
    let sc = score[i];
    if (temp.length < k) {
      temp.push(sc);
    } else {
      if (temp[0] < sc) {
        temp.shift();
        temp.push(sc);
      }
    }
    temp.sort((a, b) => a - b);

    answer.push(temp[0]);
  }
  return answer;
}
