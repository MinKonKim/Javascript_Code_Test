function solution(s) {
  var answer = "";
  let upperCase = [];
  let lowerCase = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      // s.가 대문자라면
      upperCase.push(s[i]);
    } else {
      lowerCase.push(s[i]);
    }
  }
      console.log(upperCase);
  console.log(lowerCase);
  const sortedUpper = upperCase.sort((a, b) => b.localeCompare(a)).join("");
  const sortedLower = lowerCase.sort((a, b) => b.localeCompare(a)).join("");

  return sortedLower + sortedUpper;
}
