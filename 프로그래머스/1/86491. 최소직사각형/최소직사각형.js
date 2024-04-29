function solution(sizes) {
  let max_garo = 0;
  let max_sero = 0;
  for (let i = 0; i < sizes.length; i++) {
    let garo = sizes[i][0];
    let sero = sizes[i][1];

    if (garo < sero) {
      let temp = garo;
      garo = sero;
      sero = temp;
    }

    if (max_garo < garo) {
      max_garo = garo;
    }
    if (max_sero < sero) {
      max_sero = sero;
    }
  }
  return max_garo * max_sero;
}
