function 최대공약수_구하기(a, b) {
  if (b === 0) {
    return a;
  } else {
    return 최대공약수_구하기(b, a % b);
  }
}
function solution(n, m) {
    var answer = [];
    
   // n이 m보다 무조건 작게 설정
    if (n >m){
        let temp = n;
        n = m;
        m = temp;
    }
    
    var 최대공약수 = 최대공약수_구하기(n,m)
    answer.push(최대공약수);
    answer.push(n*m/최대공약수);
    
    
    return answer;
}