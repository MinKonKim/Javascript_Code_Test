function solution(A,B){
    var answer = 0;

    const n = A.length;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    const multi =[];
    for(let i=0;i<n;i++){
        multi.push(A[i]*B[i]);
    }
    answer = multi.reduce((a,b)=>a+b,0);

    return answer;
}