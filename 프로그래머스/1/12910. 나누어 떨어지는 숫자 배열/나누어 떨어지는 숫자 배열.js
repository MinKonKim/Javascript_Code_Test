function solution(arr, divisor) {
  var answer = [];
  const arr2 = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % divisor === 0) {
      answer.push(arr2[i]);
    }
  }

  if (answer.length == 0) {
    return [-1];
  }

  return answer;
}
