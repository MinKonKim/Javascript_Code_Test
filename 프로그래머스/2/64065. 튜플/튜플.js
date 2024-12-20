function solution(s) {
    var answer = [];
    const sets= s.slice(2, -2) // 앞뒤의 "{{"와 "}}" 제거
        .split("},{") // 집합별로 나눔
        .map(set => set.split(",").map(Number));
    
    sets.sort((a,b)=>a.length - b.length);
    
    sets.forEach((set)=>{
        for (const ele of set) {
            if (!answer.includes(ele)){
                answer.push(ele);
            }
        }
    });
    
    return answer;
}