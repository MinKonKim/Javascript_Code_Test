function solution(N) {
    let batteryUsage = 0;

    while (N > 0) {
        if (N % 2 === 0) {
            // 짝수일 때는 순간이동 가능
            N /= 2;
        } else {
            // 홀수일 때는 1칸 점프 후 순간이동
            N -= 1;
            batteryUsage++;
        }
    }

    return batteryUsage;
}