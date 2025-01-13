function solution(clothes) {
    let answer = 1;
    const clothType={};
    clothes.forEach(([name, type])=>{
        if(!clothType[type]) clothType[type] = [name];
        else clothType[type].push(name);
    })

    for (const key in clothType) {
        const cnt = clothType[key].length;
        answer *= (cnt+1)
    }

    return answer-1;
}