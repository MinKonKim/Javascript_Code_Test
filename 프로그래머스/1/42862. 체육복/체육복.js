function solution(n, lost, reserve) {
  var answer = 0;

  let haveSuit = new Array(n).fill(1);

  for (i of lost) {
    haveSuit[i - 1]--;
  }
  for (i of reserve) {
    haveSuit[i - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (!haveSuit[i]) {
      //안 가져 왔다면,
      if (i - 1 >= 0 && haveSuit[i - 1] > 1) {
        // 앞사람에게  여분이 있다면,
        haveSuit[i - 1]--;
        haveSuit[i]++;
      } else if (i + 1 < n && haveSuit[i + 1] > 1) {
        // 뒷사람에게 여분이 있다면,
        haveSuit[i + 1]--;
        haveSuit[i]++;
      }
    }
  }
  console.log(haveSuit);
  for (i of haveSuit) {
    if (i > 0) answer++;
  }

  return answer;
}