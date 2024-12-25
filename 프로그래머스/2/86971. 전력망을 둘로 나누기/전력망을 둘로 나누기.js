function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 그래프 생성
    wires.forEach(([w1, w2]) => {
        graph[w1].push(w2);
        graph[w2].push(w1);
    });

    function countNodes(start, visited) {
        let count = 1; // 현재 노드 포함
        visited[start] = true;

        for (const neighbor of graph[start]) {
            if (!visited[neighbor]) {
                count += countNodes(neighbor, visited);
            }
        }

        return count;
    }

    let answer = Infinity;

    // 전선 하나씩 끊어보기
    wires.forEach(([w1, w2]) => {
        // 그래프에서 해당 전선을 제거
        graph[w1] = graph[w1].filter(v => v !== w2);
        graph[w2] = graph[w2].filter(v => v !== w1);

        // 네트워크 크기 계산
        const visited = Array(n + 1).fill(false);
        const size1 = countNodes(w1, visited);
        const size2 = n - size1;

        // 최소 차이 계산
        answer = Math.min(answer, Math.abs(size1 - size2));

        // 그래프 복구 (전선 복구)
        graph[w1].push(w2);
        graph[w2].push(w1);
    });

    return answer;
}
