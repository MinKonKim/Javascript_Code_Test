function solution(s) {
  var answer = 0;

  let xcnt = 0; //기준 문자 갯수
  let ycnt = 0; // 기준 문자 외 갯수
  let x = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[x]) {
      xcnt++;
    } else {
      ycnt++;
    }

    if (xcnt === ycnt) {
      answer += 1;

      x = i + 1;
      continue;
    }
  }

  if (x <= s.length - 1) {
    answer += 1;
  }

  return answer;
}

