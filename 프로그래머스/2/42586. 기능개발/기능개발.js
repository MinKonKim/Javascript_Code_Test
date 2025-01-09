function solution(progresses, speeds) {
    const days = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );

    const result = [];
    let currentMax = days[0];
    let count = 0;

    for (const day of days) {
        if (day > currentMax) {
            result.push(count); // 현재 그룹의 작업 수 저장
            currentMax = day;  // 새 그룹 시작
            count = 1;         // 새 그룹의 첫 작업
        } else {
            count++;            // 기존 그룹에 추가
        }
    }

    result.push(count); // 마지막 그룹 저장

    return result;
}