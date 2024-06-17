function isValidBracketString(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {    // char === ) , ] , }  일때,
      if (stack.length === 0) {
        // 스택의 길이가 0 이면, 여는 괄호가 없기 때문에 false          
        return false;
      }
        // top 할당
      const top = stack.pop();
      if ( // 괄호의 종류가 일치하는지 확인
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) { // 종류가 다르다면 fasle
        return false;
      }
    }
  }
  return stack.length === 0; // 모든 과정이 끝난뒤 , stack이 0 이라면 완벽한 괄호이다.
}

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const rotatedString = s.slice(i) + s.slice(0, i); // 글자 로테이션
    if (isValidBracketString(rotatedString)) {
      count++;
    }
  }
  return count;
}