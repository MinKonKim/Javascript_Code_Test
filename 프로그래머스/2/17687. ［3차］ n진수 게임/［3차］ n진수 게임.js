// n : 진법 t : 구할 숫자의 갯수 , 참가 인원 : m , 순서 : p
function solution(n, t, m, p) {
    let answer = '';
    let total='';
    for(let i=0;i<t*m;i++){
       
       const str = i.toString(n).toUpperCase();
       total+=str;
    }
    
    for(let i=0;i<t;i++){
       const time=p+i*m-1;
       answer += total[time];
    }
    
    
    return answer;
}