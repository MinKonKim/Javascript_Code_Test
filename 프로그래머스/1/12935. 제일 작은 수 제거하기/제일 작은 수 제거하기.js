function solution(arr) {
  var answer = [];
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);

  answer = arr;
  if (answer.length == 0) {
    return [-1];
  }
  return answer;
}