function solution(s) {
  var answer = [];

  let loopCnt = 0;
  let zeroCnt = 0;
  while (s.length > 1) {
    let beforlen = s.length;
    let as = s
      .split("")
      .filter((e) => Number(e) === 1)
      .join("");
    let afterlen = as.length;

    s = afterlen.toString(2);
    zeroCnt += beforlen - afterlen;
    loopCnt++;

    answer = [loopCnt, zeroCnt];
  }

  return answer;
}
 