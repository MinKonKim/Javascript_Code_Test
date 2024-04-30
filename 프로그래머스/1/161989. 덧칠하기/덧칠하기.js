function solution(n, m, section) {
  var answer = 0;

  let wall = new Array(n).fill(true);
    
  for (let i = 0; i < section.length; i++) {
     wall[section[i] - 1] = false;
  }

  for (let i = 0; i < n; i++) {
    if (!wall[i]) {
      for (let j = 0; j < m; j++) {
        if (i + j < n) wall[i + j] = true;
        
      }
        
        answer++;
    }
  }
  return answer;
}
