function solution(n, k) {
    function isPrime(number){
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
    
    var answer = 0;
    const t = n.toString(k);
    const numbers = t.split("0");
    
    numbers.forEach((num)=>{
        if(isPrime(Number(num))){
            answer++;
        }
    })
    
    return answer;
}