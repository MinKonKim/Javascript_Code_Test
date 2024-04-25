function solution(x, n) {
  var answer = [];
  let inputnum = x;
  for (let i = 0; i < n; i++) {
    answer.push(inputnum);
    inputnum += x;
  }

  return answer;
}