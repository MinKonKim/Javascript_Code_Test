function solution(priorities, location) {
    
    
    var answer = 0;
    let sets =[];
    priorities.map((prior,index)=>{
        sets.push([prior,index]);
    })  
    
    while(sets.length> 0){
        
        const [prior, index] = sets.shift();
        // 큐에 더 높은 우선순위가 있는지 확인
        if (sets.some(([p]) => p > prior)) {
            sets.push([prior,index])
        }else{
            // 우선 순위 높은게 없다면
            answer++;
            if (index === location) {
                return answer; // 목표 프로세스 실행 시 종료
            }
        }
        
    }
    

    return answer;
}