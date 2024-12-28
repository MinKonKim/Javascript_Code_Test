function solution(a, b, g, s, w, t) {
    // 최소 시간 0, 최대 시간은 광물을 1씩 운반할 때의 최악의 경우
    let left = 0;
    let right = 10e5 * 10e9 * 2;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        let totalGold = 0;      // 운반 가능한 총 금의 양
        let totalSilver = 0;    // 운반 가능한 총 은의 양
        let totalMineral = 0;   // 운반 가능한 총 광물의 양
        
        // 각 도시별로 주어진 시간(mid) 동안 운반할 수 있는 광물의 양 계산
        for (let i = 0; i < g.length; i++) {
            // 주어진 시간 동안 가능한 왕복 횟수 계산
            const roundTrips = Math.floor(mid / (t[i] * 2));
            // 편도 추가 가능 여부 확인
            const hasExtraTrip = Math.floor(mid % (t[i] * 2)) >= t[i] ? 1 : 0;
            // 총 운반 가능 횟수
            const totalTrips = roundTrips + hasExtraTrip;
            // 이 도시에서 운반할 수 있는 최대 광물의 양
            const maxWeight = totalTrips * w[i];
            
            // 이 도시에서 운반 가능한 금의 양 (도시가 가진 금과 운반 가능한 양 중 최소값)
            const possibleGold = Math.min(g[i], maxWeight);
            // 이 도시에서 운반 가능한 은의 양
            const possibleSilver = Math.min(s[i], maxWeight);
            // 이 도시에서 운반 가능한 전체 광물의 양 (금과 은의 합과 운반 가능한 양 중 최소값)
            const possibleTotal = Math.min(g[i] + s[i], maxWeight);
            
            totalGold += possibleGold;
            totalSilver += possibleSilver;
            totalMineral += possibleTotal;
        }
        
        // 목표 달성 가능 여부 확인
        // 1. 금과 은의 목표량을 각각 달성할 수 있는지
        // 2. 전체 광물의 합이 충분한지
        if (totalGold >= a && totalSilver >= b && totalMineral >= a + b) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}