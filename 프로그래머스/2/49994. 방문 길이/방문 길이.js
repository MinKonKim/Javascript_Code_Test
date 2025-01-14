function solution(dirs) {
    const DIR = {
        L: [-1, 0],
        R: [1, 0],
        U: [0, 1],
        D: [0, -1],
    };

    const visited = new Set();
    let start = [0, 0];

    function setLoad(start, dest) {
        return `(${start[0]},${start[1]})->(${dest[0]},${dest[1]})`;
    }

    for (const dir of dirs) {
        const [dx, dy] = DIR[dir];
        const dest = [start[0] + dx, start[1] + dy];

        // 범위 벗어나면 무시
        if (dest[0] < -5 || dest[1] < -5 || dest[0] > 5 || dest[1] > 5) {
            continue;
        }

        // 경로 추가
        const load = setLoad(start, dest);
        const reverseLoad = setLoad(dest, start);

        visited.add(load);
        visited.add(reverseLoad); // 쌍방향 경로 처리

        start = dest; // 현재 위치 갱신
    }

    return visited.size / 2; // 쌍방향 경로는 중복되므로 2로 나눔
}
