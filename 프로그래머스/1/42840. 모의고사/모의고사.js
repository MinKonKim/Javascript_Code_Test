function solution(answers) {
  var answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let p1cnt = 0;
  let p2cnt = 0;
  let p3cnt = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % 5]) p1cnt++;
    if (answers[i] === p2[i % 8]) p2cnt++;
    if (answers[i] === p3[i % 10]) p3cnt++;
  }

  let max = Math.max(p1cnt, p2cnt, p3cnt);

  if (max === p1cnt) answer.push(1);
  if (max === p2cnt) answer.push(2);
  if (max === p3cnt) answer.push(3);

  return answer;
}
