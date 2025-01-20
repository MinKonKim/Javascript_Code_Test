function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        // 가격이 떨어지는 경우 스택 처리
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const index = stack.pop();
            answer[index] = i - index; // 떨어지기까지의 시간
        }
        // 현재 인덱스 추가
        stack.push(i);
    }

    // 남아 있는 스택 처리 (끝까지 가격이 떨어지지 않은 경우)
    while (stack.length > 0) {
        const index = stack.pop();
        answer[index] = prices.length - 1 - index;
    }

    return answer;
}
