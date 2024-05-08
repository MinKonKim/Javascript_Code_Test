function solution(players, callings) {
    // 선수들의 현재 위치를 저장하는 객체
    let playerPositions = {};
    players.forEach((player, index) => {
        playerPositions[player] = index;
    });

    callings.forEach(calling => {
        // 추월한 선수의 위치를 찾음
        const pos = playerPositions[calling];
        // 추월하여 위치를 변경 (한 칸 앞으로 이동)
        if (pos > 0) { // 1등은 불가능하므로 체크할 필요 없음
            // 추월당한 선수의 이름을 찾음
            const overtakenPlayer = players[pos - 1];
            // 위치 교환
            players[pos] = overtakenPlayer;
            players[pos - 1] = calling;
            // 위치 정보 업데이트
            playerPositions[overtakenPlayer] = pos;
            playerPositions[calling] = pos - 1;
        }
    });

    return players;
}