function solution(ingredient) {
  var answer = 0;
  const rule = 1231;

  let stack = [];

  let flag = false;
  for (let i = 0; i < ingredient.length; i++) {
    let ingre = ingredient[i];

    stack.push(ingre);

    if (ingre === 1 && stack.length >= 4) {
      let str = stack.slice(stack.length - 4, stack.length).join("");

      if (str == rule) {
        stack.splice(stack.length - 4, 4);
        answer++;
      }
    }
  }

  return answer;
}