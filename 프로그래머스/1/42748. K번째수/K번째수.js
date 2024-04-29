function solution(array, commands) {
  var answer = [];

  commands.forEach((command) => {
    let start = command[0] - 1;
    let end = command[1];
    let pick = command[2] - 1;

    let arr = array.slice(start, end).sort((a, b) => a - b);;
    answer.push(arr[pick]);
  });
  return answer;
}