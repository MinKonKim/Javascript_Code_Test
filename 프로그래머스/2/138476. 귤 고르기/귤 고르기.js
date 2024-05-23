function solution(k, tangerine) {
  // 귤의 크기 별로 개수를 센다.
  const countMap = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  // 개수가 많은 순서대로 정렬한다.
  const sortedCounts = Object.values(countMap).sort((a, b) => b - a);

  let total = 0;
  let kinds = 0;

  // 개수가 많은 귤부터 차례로 선택하여 k개를 채운다.
  for (let count of sortedCounts) {
    total += count;
    kinds += 1;
    if (total >= k) {
      break;
    }
  }

  return kinds;
}
