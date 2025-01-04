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
            let totalCost = 0;
            let mustAttend = false;
            let minDiff = Infinity;
            
            // 각 팀원별로 참석/불참 비용 계산
            for (const member of teams[node]) {
                const notAttend = dfs(member, 0);
                const attend = dfs(member, 1);
                // 최소 비용 선택
                if (notAttend < attend) {
                    totalCost += notAttend;
                    // 참석/불참 비용의 차이 계산
                    minDiff = Math.min(minDiff, attend - notAttend);
                } else {
                    totalCost += attend;
                    mustAttend = true;
                }
            }
            
            // 팀원 중 아무도 참석하지 않는 경우, 가장 적은 비용으로 한 명을 참석시킴
            if (!mustAttend) {
                if (minDiff === Infinity) {
                    minDiff = 0;
                }
                totalCost += minDiff;
            }
            
            dp[node][0] = totalCost;
        }
        
        return dp[node][attend];
    }
    
    // CEO(0번 인덱스)부터 시작하여 참석/불참 중 최소 비용 선택
    return Math.min(dfs(0, 0), dfs(0, 1));
}