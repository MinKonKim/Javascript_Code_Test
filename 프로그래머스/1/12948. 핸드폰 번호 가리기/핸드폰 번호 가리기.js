function solution(phone_number) {
  var answer = "";
  const back_num = phone_number.slice(-4);

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }
  return answer + back_num;
}