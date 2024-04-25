function counting(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      cnt++;
    }
  }
  return cnt;
}

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let num = counting(i); //약수 갯수 구하는 함수
    if (num % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}