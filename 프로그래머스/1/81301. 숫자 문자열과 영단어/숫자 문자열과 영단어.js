function solution(s) {
  var answer = "";

  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.forEach((num, i) => {
    s = s.split(num).join(i);
  });

  console.log(s);
  return Number(s);
}
