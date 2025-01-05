function solution(sales, links) {
    const n = sales.length;
    // 각 직원이 속한 팀을 저장하는 그래프 구조 생성
    const teams = Array.from({ length: n }, () => []);
    for (const [leader, member] of links) {
        teams[leader - 1].push(member - 1);
    }
    
    // dp[i][0]: i번 직원이 워크샵에 불참할 때의 최소 비용
    // dp[i][1]: i번 직원이 워크샵에 참가할 때의 최소 비용
    const dp = Array.from({ length: n }, () => [-1, -1]);
    
    function dfs(node, attend) {
        // 이미 계산된 경우 반환
        if (dp[node][attend] !== -1) {
            return dp[node][attend];
        }
        
        // 현재 노드가 리프 노드인 경우
        if (teams[node].length === 0) {
            dp[node][attend] = attend ? sales[node] : 0;
            return dp[node][attend];
        }
        
        // 현재 직원이 워크샵에 참석하는 경우
        if (attend) {
            let cost = sales[node];
            // 팀원들은 참석하거나 불참할 수 있음
            for (const member of teams[node]) {
                cost += Math.min(dfs(member, 0), dfs(member, 1));
            }
            dp[node][1] = cost;
        }
        // 현재 직원이 워크샵에 불참하는 경우
        else {
            let minTotalCost = Infinity;
            const teamSize = teams[node].length;
            
            // 모든 가능한 팀원 참석 조합을 확인
            // 비트마스크를 사용하여 모든 조합 생성
            for (let mask = 0; mask < (1 << teamSize); mask++) {
                let currentCost = 0;
                let hasAttendee = false;
                
                // 각 팀원에 대해 참석 여부 결정
                for (let i = 0; i < teamSize; i++) {
                    const member = teams[node][i];
                    if (mask & (1 << i)) { // 참석하는 경우
                        currentCost += dfs(member, 1);
                        hasAttendee = true;
                    } else { // 불참하는 경우
                        currentCost += dfs(member, 0);
                    }
                }
                
                // 적어도 한 명이 참석한 경우에만 최소 비용 업데이트
                if (hasAttendee) {
                    minTotalCost = Math.min(minTotalCost, currentCost);
                }
            }
            
            dp[node][0] = minTotalCost;
        }
        
        return dp[node][attend];
    }
    
    // CEO(0번 인덱스)부터 시작하여 참석/불참 중 최소 비용 선택
    return Math.min(dfs(0, 0), dfs(0, 1));
}