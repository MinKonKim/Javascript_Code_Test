function solution(n) {
  const dp = new Array(2001);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1]%1234567 + dp[i - 2]%1234567;
  }

  return dp[n]%1234567;
}
