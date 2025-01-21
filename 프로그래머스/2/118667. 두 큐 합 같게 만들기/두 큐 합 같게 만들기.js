function solution(queue1, queue2) {
    // 큐를 배열로 합치기
    const merged = [...queue1, ...queue2];
    // 포인터 초기화
    let start = 0;
    let end = queue1.length - 1;
    
    // 각 큐의 합 계산
    let sum = queue1.reduce((a, b) => a + b, 0);
    const totalSum = sum + queue2.reduce((a, b) => a + b, 0);
    
    // 목표값 계산 (전체 합의 절반)
    const target = totalSum / 2;
    
    // 전체 합이 홀수면 불가능
    if (totalSum % 2 !== 0) return -1;
    
    // 최대 이동 횟수 제한 (무한 루프 방지)
    const maxCount = queue1.length * 3;
    let count = 0;
    
    while (count <= maxCount) {
        if (sum === target) {
            return count;
        }
        
        if (sum > target) {
            // 현재 합이 더 크면 start 포인터의 값을 뺌
            sum -= merged[start];
            start++;
        } else {
            // 현재 합이 더 작으면 end 포인터의 값을 더함
            end++;
            if (end >= merged.length) break;
            sum += merged[end];
        }
        count++;
    }
    
    return -1;  // 불가능한 경우
}