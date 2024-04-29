function solution(t, p) {
  var answer = 0;
  const pl = p.length;

  for (let i = 0; i < t.length - pl+1; i++) {
    let number = t.substring(i, i + pl);

    if (parseInt(p) >= parseInt(number)) {
      answer++;
    }
  }
  return answer;
}
