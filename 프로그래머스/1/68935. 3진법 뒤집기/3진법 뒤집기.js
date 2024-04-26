function solution(n) {
    let answer =0;
    
    let result ="";
    while(n>0){
        result += n%3;
        n/=3;
        n= Math.floor(n)
    }
    // result+=Math.floor(n);
    
    result = result.split('').reverse().join('');
    
    for(let i= 0; i <result.length;i++){
        answer += 3**i * parseInt(result[i]);
    }
    
    return answer;
}