function solution(record) {
    var answer = [];
    let log={};
    record.forEach((rec) => {
        const [state, id, name] = rec.split(" ");

        if (state === "Enter" || state === "Change") {
            log[id] = name;
        }
    });
    
    record.forEach((rec)=>{
        const [state,id]=rec.split(" ");
        if(state==="Enter")
            answer.push(`${log[id]}님이 들어왔습니다.`)
        else if(state==="Leave")
             answer.push(`${log[id]}님이 나갔습니다.`)
        
    })
    
    return answer;
}