function solution(elements) {
  var answer = 0;
  const madeNumbers = new Set();
  const length = elements.length;
  // 반복할 길이
  for (let i = 0; i < length; i++) {
    let sum = 0;
    const newElements = [...elements, ...elements.slice(0, i)];
    for (let j = 0; j < newElements.length; j++) {
      const slicedElements = newElements.slice(j, j + i + 1);
      const sum = slicedElements.reduce((acc, cur) => acc + cur, 0);
      madeNumbers.add(sum);
    }
  }

  return madeNumbers.size;
}
