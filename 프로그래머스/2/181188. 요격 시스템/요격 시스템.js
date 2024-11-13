function solution(targets) {
    // 끝 지점을 기준으로 오름차순 정렬
    targets.sort((a, b) => a[1] - b[1]);

    let intercepts = 0;  
    let lastInterceptPosition = -Infinity;  // 마지막 요격 위치 초기화

    for (let i = 0; i < targets.length; i++) {
        const [start, end] = targets[i];
        
        // 현재 구간의 시작점이 마지막 요격 위치보다 큰 경우
        if (start > lastInterceptPosition) {
            intercepts++;  // 요격 미사일 추가
            lastInterceptPosition = end - 0.1;  // 현재 구간의 끝 부분에 요격 미사일을 배치
        }
    }

    return intercepts;
}