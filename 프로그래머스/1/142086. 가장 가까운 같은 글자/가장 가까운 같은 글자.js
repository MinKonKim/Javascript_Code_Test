function solution(s) {
  var answer = [];
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - map[s[i]]);
    }
    map[s[i]] = i;
  }

  return answer;
}