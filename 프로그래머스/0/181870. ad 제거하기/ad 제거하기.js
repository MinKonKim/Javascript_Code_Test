function solution(strArr) {
    var answer = [];
    strArr.map((word)=> {
        if(!word.includes("ad")){
            answer.push(word)
        }
    } )
    return answer;
}