function solution(record) {
    var answer = [];
    let log={};
    record.forEach((rec) => {
        const [state, id, name] = rec.split(" ");

        if (!log[id]) {
            log[id] = { states: [], name: null };
        }

        log[id].states.push(state); // 상태 배열에 추가

        if (state === "Enter" || state === "Change") {
            log[id].name = name;
        }
    });
    
    record.forEach((rec)=>{
        const [state,id]=rec.split(" ");
        if(state==="Enter")
            answer.push(`${log[id].name}님이 들어왔습니다.`)
        else if(state==="Leave")
             answer.push(`${log[id].name}님이 나갔습니다.`)
        
    })
    
    return answer;
}