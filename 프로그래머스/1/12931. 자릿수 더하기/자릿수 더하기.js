function solution(n) {
  var answer = 0;
  const n2str = String(n);

  for (let i = 0; i < n2str.length; i++) {
    answer += Number(n2str[i]);
  }

  return answer;
}
