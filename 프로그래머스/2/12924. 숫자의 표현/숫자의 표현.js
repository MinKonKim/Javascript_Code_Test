function solution(n) {
    let answer = 0;
    
    // n = k + (k+1) + (k+2) + ... + (k+l-1) 형태로 표현할 때
    // n = l*k + (l*(l-1))/2
    // k = (n - (l*(l-1))/2) / l
    // k는 자연수여야 함
    
    let l = 1;
    while (true) {
        let temp = n - (l * (l-1)) / 2;
        if (temp <= 0) break;
        if (temp % l === 0) {
        console.log(temp,l);
            
            answer++;
        }
        l++;
    }
    
    return answer;
}