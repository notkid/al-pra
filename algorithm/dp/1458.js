/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
  const n = nums1.length,
    m = nums2.length;
  const dp = new Array(n + 1).fill([]);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1).fill(-Infinity);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i][j - 1],
        nums1[i - 1] * nums2[j - 1],
        (dp[i - 1][j - 1] == -Infinity ? 0 : dp[i - 1][j - 1]) +
          nums1[i - 1] * nums2[j - 1]
          );
    }
  }
  return dp[n][m];
};

console.log(maxDotProduct([-3,-8,3,-10,1,3,9],
    [9,2,3,7,-9,1,-8,5,-1,-1]));
