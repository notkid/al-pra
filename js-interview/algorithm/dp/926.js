/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let ans = s.length;
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + (s[i - 1] === "1" ? 1 : 0);
  }

  //   console.table(dp);
  for (let i = 0; i <= n; i++) {
    ans = Math.min(ans, dp[i] + (n - i - (dp[n] - dp[i])));
  }
  return ans;
};

console.log(minFlipsMonoIncr("00110"));
