/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length,
    dfs = (i) => {};

  const dp = new Array(n).fill(false).map((a) => new Array(n).fill(true));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  console.log(dp);
};

console.log(partition("aab"));
