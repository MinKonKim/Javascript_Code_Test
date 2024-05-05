

function compare(a, b, map) {
  if (map[a] > map[b]) {
    return a;
  } else if (map[a] < map[b]) {
    return b;
  } else {
    return a < b ? a : b;
  }
}

function solution(survey, choices) {
  var answer = "";
  let map = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  survey.forEach((sur, idx) => {
    if (choices[idx] > 4) {
      map[sur[1]] += choices[idx] % 4;
    } else if (choices[idx] < 4) {
      map[sur[0]] += (4-choices[idx]);
    }
  });
  console.log(map);
  answer += compare("R", "T", map);
  answer += compare("C", "F", map);
  answer += compare("J", "M", map);
  answer += compare("A", "N", map);
  return answer;
}

