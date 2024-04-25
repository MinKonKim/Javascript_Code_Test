function solution(arr) {
  var answer = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    answer += arr[i];
  }
  return answer / n;
}