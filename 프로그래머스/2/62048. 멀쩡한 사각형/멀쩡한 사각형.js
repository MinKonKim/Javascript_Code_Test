function solution(w, h) {
    var answer = 1;
    function GCD(a,b){ // 최대공약수 구하기
        while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
        
    }
    
    const gcd = GCD(w,h);
    const disabled = w+h - gcd;
    answer = w*h - disabled;
    
    return answer;
}