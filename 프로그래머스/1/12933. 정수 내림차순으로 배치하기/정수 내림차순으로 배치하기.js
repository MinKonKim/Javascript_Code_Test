function solution(n) {
  var answer = 0;
  let numbers = String(n).split("");

  numbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    answer += Number(numbers[i]) * 10 ** i;
  }

  return answer;
}
