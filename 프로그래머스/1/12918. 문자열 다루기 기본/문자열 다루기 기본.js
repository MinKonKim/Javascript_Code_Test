function solution(s) {
    const len = s.length;
    // if (len ===4 || len ===6){
    //     if( /^[0-9]+$/.test(s)){
    //         return true
    //     }
    // }else{
    //     return false;
    // }
 
    return  (len ===4 || len ===6) && ( /^[0-9]+$/.test(s));
    
}