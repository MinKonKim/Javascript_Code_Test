

function countNumber(x) {
  let arr = new Array(10).fill(0);
  for (i of x) {
    arr[Number(i)]++;
  }
  return arr;
}

function solution(X, Y) {
  var answer = "";

  const xn = countNumber(X);
  const yn = countNumber(Y);

  for (let i = 0; i < 10; i++) {
    let min = Math.min(xn[i], yn[i]);
    for (let j = 0; j < min; j++) {
      answer += i;
    }
  }
  answer = answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
    
  if ((answer[0] === "0")) return "0";
  else if (answer.length === 0) return "-1";
  else return answer;
}
