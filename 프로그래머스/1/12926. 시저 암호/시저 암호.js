function solution(s, n) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    // 공백인 경우
    if (s[i] === " ") {
      answer += s[i];
      continue;
    }

    let charCode = s[i].charCodeAt();
    let shiftedCharCode;
    console.log(charCode);
    // 알파벳 소문자인 경우
    if (charCode >= 97 && charCode <= 122) {
      shiftedCharCode = ((charCode - 97 + n) % 26) + 97;
    }
    // 알파벳 대문자인 경우
    else if (charCode >= 65 && charCode <= 90) {
      shiftedCharCode = ((charCode - 65 + n) % 26) + 65;
    }

    answer += String.fromCharCode(shiftedCharCode);
  }
  return answer;
}