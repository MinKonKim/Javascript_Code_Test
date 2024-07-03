function solution(n, left, right) {
    var answer = [];
    for(let i=left; i<=right; i++){
        const row = Math.floor(i/n)+1;
        const col = i%n+1;
        if(col < row){
            answer.push(row)
        }else{
            answer.push(col)
        }
    }
    return answer;
}