function solution(k, m, score) {
  var answer = 0;
  // 내림 차순 정렬
  score.sort((a, b) => b - a);

  const max_box = Math.floor(score.length / m) * m;

  for (let i = 0; i < max_box; i += m) {
    let temp = score.slice(i, i + m);
    // 최저값 * 사과 갯수
    answer += Math.min(...temp) * m;
  }

  return answer;
}