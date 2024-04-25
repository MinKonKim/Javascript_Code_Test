function solution(n) {
  var answer = [];
  const numbers = String(n).split("");
  for (let i = numbers.length - 1; i > -1; i--) {
     answer.push(Number(numbers[i]));
  }

  return answer;
}