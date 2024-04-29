function solution(a, b) {
  var answer = "";
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const yoil = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  let day = days.slice(0, a).reduce((a, b) => a + b, 0) + b - 1;

  answer = yoil[day % 7];

  return answer;
}
