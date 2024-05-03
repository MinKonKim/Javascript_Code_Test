function solution(s, skip, index) {
  var answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let char of s) {
    let currentIdx = alphabet.indexOf(char);
    let newIdx = currentIdx;
    let count = 0;

    while (count != index) {
      newIdx = (newIdx + 1) % alphabet.length;
      if (!skip.includes(alphabet[newIdx])) {
        count++;
      }
    }

    answer += alphabet[newIdx];
  }

  return answer;
}