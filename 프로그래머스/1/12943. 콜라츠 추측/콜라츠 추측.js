function solution(num) {
  let i = 0;
  while (i < 500 && num != 1) {
          console.log(num);
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    i++;
  }

  if (i == 500) {
    return -1;
  } else {
    return i;
  }
}