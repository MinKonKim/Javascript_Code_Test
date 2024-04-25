function solution(x) {
  let sum = 0; // 각 자릿수들의 합
  let temp = x; 
  while (temp) {
    sum += temp % 10; // 현재 숫자를 10으로 나눈 나머지를 더합니다.
    temp = Math.floor(temp / 10); // 현재 숫자를 10으로 나눈 몫을 새로운 숫자로 갱신합니다.
  }
  if (x % sum == 0) {
    return true;
  } else {
    return false;
  }
}