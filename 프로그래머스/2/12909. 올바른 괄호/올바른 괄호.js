function solution(s){
    var answer = true;

    const stack = [];
    let open = 0;
    for(let i=0;i<s.length;i++){
        const gwalho = s[i];
        if(gwalho ==="("){
            open++;
        }else{
            open--;
        }
        
        if(open <0|| open > s.length/2){
            answer =false;
            break;
        }
        
        
    }
    if(open >0)return false;
    return answer;
}