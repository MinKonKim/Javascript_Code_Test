function solution(n) {
    let result = "";

    while (n > 0) {
        let remainder = n % 3; // 3으로 나눈 나머지
        n = Math.floor(n / 3); // 몫 계산

        // 나머지가 0일 경우 '4'를 사용하고 몫을 1 감소
        if (remainder === 0) {
            remainder = 4;
            n -= 1;
        }

        // 결과 문자열에 추가
        result = remainder + result;
    }

    return result;
}