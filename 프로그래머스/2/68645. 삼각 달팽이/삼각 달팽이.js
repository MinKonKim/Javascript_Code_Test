function solution(n) {
    // 삼각형 배열 생성
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    let value = 1; // 채울 값
    let row = 0, col = 0; // 초기 위치
    let direction = 0; // 0: 아래, 1: 오른쪽, 2: 위 대각선

    const directions = [
        [1, 0], // 아래
        [0, 1], // 오른쪽
        [-1, -1] // 위 대각선
    ];

    // n * (n + 1) / 2개의 값을 채울 때까지 반복
    while (value <= (n * (n + 1)) / 2) {
        triangle[row][col] = value++;
        const nextRow = row + directions[direction][0];
        const nextCol = col + directions[direction][1];

        // 방향 전환 조건: 배열의 경계, 이미 값이 채워진 곳
        if (
            nextRow >= n || nextCol > nextRow || 
            nextRow < 0 || nextCol < 0 || 
            triangle[nextRow][nextCol] !== 0
        ) {
            direction = (direction + 1) % 3; // 방향 전환
        }

        // 다음 위치로 이동
        row += directions[direction][0];
        col += directions[direction][1];
    }

    // 결과 배열로 변환
    return triangle.flat();
}