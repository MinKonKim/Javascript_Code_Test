function solution(people, limit) {
    people.sort((a, b) => b - a); // 몸무게를 내림차순 정렬 (가장 무거운 사람부터)

    let boats = 0; // 필요한 보트 수
    let i = 0; // 가장 무거운 사람의 인덱스
    let j = people.length - 1; // 가장 가벼운 사람의 인덱스

    while (i <= j) {
        // 무거운 사람(i)과 가벼운 사람(j)을 한 보트에 태울 수 있는지 확인
        if (people[i] + people[j] <= limit) {
            j--; // 가벼운 사람 태움
        }
        i++; // 무거운 사람 태움 (항상 태움)
        boats++; // 보트 수 증가
    }

    return boats;
}
