function solution(N, road, K) {
    // 1. 그래프 생성 (인접 리스트)
    const graph = Array.from({ length: N + 1 }, () => []);
    road.forEach(([a, b, c]) => {
        graph[a].push([b, c]); // a에서 b로 가는 시간 c
        graph[b].push([a, c]); // b에서 a로 가는 시간 c (양방향)
    });

    // 2. 최단 거리 초기화
    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0; // 1번 마을에서 시작

    // 3. 우선순위 큐 (Priority Queue)
    const pq = [[1, 0]]; // [현재 마을, 현재까지의 거리]

    while (pq.length > 0) {
        // 우선순위 큐에서 가장 가까운 마을 꺼내기
        pq.sort((a, b) => a[1] - b[1]); // 거리 기준 정렬
        const [current, currentDist] = pq.shift();

        // 이미 처리된 거리보다 큰 경우 무시
        if (currentDist > distances[current]) continue;

        // 현재 마을의 인접 마을 확인
        for (const [next, time] of graph[current]) {
            const newDist = currentDist + time;
            if (newDist < distances[next]) {
                distances[next] = newDist; // 최단 거리 갱신
                pq.push([next, newDist]); // 다음 마을 추가
            }
        }
    }

    // 4. K 이하의 거리인 마을 개수 세기
    return distances.filter((dist) => dist <= K).length;
}