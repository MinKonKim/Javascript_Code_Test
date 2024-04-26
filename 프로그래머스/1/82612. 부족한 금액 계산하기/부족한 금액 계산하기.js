function solution(price, money, count) {
    var answer = -1;
    
    let totalmoney=0;
    for(let i=1;i<count+1;i++){
        totalmoney+=price*i;
    }
    
    return totalmoney > money ? totalmoney-money : 0;
    
}