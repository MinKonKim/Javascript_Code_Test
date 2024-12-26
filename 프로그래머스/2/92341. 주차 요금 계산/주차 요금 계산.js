function solution(fees, records) {
    const [defaultTime, defaultPrice, unitTime,unitPrice] = fees;
    
    function timeToMinutes(time) {
        const [hh, mm] = time.split(':').map(Number);
        return hh * 60 + mm;
    }
    function calculateTime(inTime, outTime){
        const out = outTime||"23:59";
        const inMinute = timeToMinutes(inTime);
        const outMinute = timeToMinutes(out);
        return  outMinute - inMinute;
    }
    
    var answer = [];
        
    const parkingTime = {}; // 주차 시간 현황 저장
    const inCars = {}; // 입차 기록
    const prices ={};
    
    records.forEach((record)=>{
        const [time,carNum,action] = record.split(" ");
        if(action ==="IN"){
            inCars[carNum] = time;
        }else{
            const inTime = inCars[carNum];
            const preTime = parkingTime[carNum]||0;
            parkingTime[carNum] = preTime + calculateTime(inTime,time);
            delete inCars[carNum];
        }
    })
    
    Object.keys(inCars).forEach(carNum=>{
       const inTime = inCars[carNum];
       const preTime = parkingTime[carNum]||0;
       parkingTime[carNum] = preTime+calculateTime(inTime);
    })
    
    Object.keys(parkingTime).forEach(carNum=>{
        
        const calTime = Math.ceil((parkingTime[carNum] - defaultTime)/unitTime)
        if(calTime < 0){
             prices[carNum] = defaultPrice;
        }else{
            const price =defaultPrice +calTime *unitPrice;
            prices[carNum] = price;
        }
        
    })
    
    
  const sortedValues = Object.keys(prices)
    .sort()
    .map(key => prices[key]);
 
    
    return sortedValues;
}