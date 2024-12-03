function makeMinute(time) {
    const [hour, minute] = time.split(":");
    return Number(hour) * 60 + Number(minute);
}

function solution(book_time) {
    const rooms = [];

    const sortedTimes = book_time
        .map(([startTime, endTime]) => [makeMinute(startTime), makeMinute(endTime)])
        .sort((a, b) => a[0] - b[0]);

    // 예약 처리
    for (const [start, end] of sortedTimes) {
        let assigned = false;

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= start) {
                rooms[i] = end + 10;
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            // 새 방을 추가
            rooms.push(end + 10);
        }
    }

    return rooms.length; // 필요한 방의 수
}