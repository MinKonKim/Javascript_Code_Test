function solution(number) {
    var answer = 0;
    // number: 문자형, 
    // 각자리 숫자합 =?
    // 1) number for문으로 순회를 돌면서 합을 구해줄 겁니다.
    // 
    for (let i =0; i<number.length;i++){
        const num = Number( number[i]); // 2) number[i] 를 숫자형으로 만들어줘야 한다.
        answer += num; // 3) 숫자로 변경된 num값 더해줄 겁니다.
    }
    // 4) answer 에 총합이 있는데
    return answer%9 // 5) 9로나눈 나머지;
}