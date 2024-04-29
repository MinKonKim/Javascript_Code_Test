function solution(strings, n) {
  var answer = [];
  for (let i = 0; i < strings.length; i++) {
    answer.push(strings[i].charAt(n) + strings[i]);
  }
  answer.sort();

  answer.forEach((str, i) => {
    answer[i] = str.substring(1);
  });
  return answer;
}