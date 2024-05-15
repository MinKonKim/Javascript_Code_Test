function solution(brown, yellow) {
  var answer = [];
  let total = brown + yellow;

  for (let i = 3; i <= Math.floor(Math.sqrt(total)); i++) {
    if (total % i === 0) {
      let width = (i - 2) * (total / i - 2);
      if (width === yellow) {
        answer.push(i);
        answer.push(total / i);
      }
    }
  }
  answer.sort((a, b) => b - a);
  return answer;
}
