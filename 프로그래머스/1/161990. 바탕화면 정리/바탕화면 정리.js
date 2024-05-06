function solution(wallpaper) {
  var answer = [];
  let minX = wallpaper[0].length - 1;
  let minY = wallpaper.length;

  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < wallpaper.length; y++) {
    for (let x = 0; x < wallpaper[y].length; x++) {
      let file = wallpaper[y][x];
      if (file === "#") {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }

 answer = [minY, minX, maxY + 1, maxX + 1];

  return answer;
}
