function solution(s) {
  return s
    .split(' ') // 공백을 기준으로 문자열을 나누어 배열로 변환
    .map(word => {
      return word
        .split('') // 단어를 문자 단위로 분리하여 배열로 변환
        .map((char, index) => {
          if (index % 2 === 0) {
            return char.toUpperCase(); // 짝수번째 알파벳은 대문자로 변환
          } else {
            return char.toLowerCase(); // 홀수번째 알파벳은 소문자로 변환
          }
        })
        .join(''); // 변환된 문자 배열을 다시 문자열로 결합
    })
    .join(' '); // 변환된 단어 배열을 다시 문자열로 결합하여 반환
}

let inputString = "try hello world";
let result = solution(inputString);
console.log(result); // 출력: "TrY HeLlO WoRlD"
