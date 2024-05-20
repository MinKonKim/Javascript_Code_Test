function gcd(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {

  return (a * b) / gcd(a, b);
}

function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur));
}