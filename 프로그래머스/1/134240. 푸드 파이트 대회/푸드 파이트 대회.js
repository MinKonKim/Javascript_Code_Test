function solution(food) {
  var answer = "0";

  for (let i = food.length - 1; i > 0; i--) {
    let n = Math.floor(food[i] / 2);
    for (let j = 0; j < n; j++) {
      answer += i;
      answer = i + answer;
    }
  }

  return answer;
}
