function solution(park, routes) {
  let position = [0, 0]; // 로봇 강아지의 현재 위치 초기화

  // 시작 위치 찾기
  for (let i = 0; i < park.length; i++) {
    let index = park[i].indexOf("S");
    if (index !== -1) {
      position = [i, index];
      break;
    }
  }

  // 명령 수행
  routes.forEach((route) => {
    const [direction, distance] = route.split(" ");
    let [y, x] = position;
    let moveCount = parseInt(distance, 10);

    // 명령에 따른 위치 업데이트
    switch (direction) {
      case "N":
        for (let i = 1; i <= moveCount; i++) {
          if (y - i < 0 || park[y - i][x] === "X") {
            position[0] = y;
            break;
          }
          position[0] = y - i;
        }
        break;
      case "S":
        for (let i = 1; i <= moveCount; i++) {
          if (y + i >= park.length || park[y + i][x] === "X") {
            position[0] = y;
            break;
          }
          position[0] = y + i;
        }
        break;
      case "W":
        for (let i = 1; i <= moveCount; i++) {
          if (x - i < 0 || park[y][x - i] === "X") {
            position[1] = x;
            break;
          }
          position[1] = x - i;
        }
        break;
      case "E":
        for (let i = 1; i <= moveCount; i++) {
          if (x + i >= park[0].length || park[y][x + i] === "X") {
            position[1] = x;
            break;
          }
          position[1] = x + i;
        }
        break;
    }
  });
  return position;
}