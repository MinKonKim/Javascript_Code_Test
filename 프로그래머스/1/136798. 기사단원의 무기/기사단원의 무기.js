
const primeCount = (number) => {

    let count = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        if (number / i === i) {
          // 제곱근이라면
          count++; // 약수가 하나만 추가됩니다.
        } else {
          count += 2; // 서로 다른 두 약수가 추가됩니다.
        }
      }
    }
    return count;
};

function solution(number, limit, power) {
  var answer = 0;
  let power_list = [];
  for (let i = 1; i < number + 1; i++) {
    let primcnt = primeCount(i);
    power_list.push(primcnt <= limit ? primcnt : power);
  }

  return power_list.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(5, 3, 2));
