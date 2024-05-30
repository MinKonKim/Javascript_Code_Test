function solution(order) {
    var answer = 0;
    // 아메라카노, 아무거나 : 4500   라떼 5000
    // order 를 순회하긴 해야겠다. => 반복문  
    // 조건 
    // 라떼만 찾아내면 된다.
    // 어떻게 찾냐? 
    // includes()
    for(let i=0; i<order.length;i++){
         // "cafelatte" 라는 글자가 있다면 true, 없으면 false
        console.log(i)
        if (order[i].includes("cafelatte"))
           
            {
                answer+=5000
            }
        else{
            answer+=4500;
        }
    }
       
    return answer;
}