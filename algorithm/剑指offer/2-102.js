/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function (nums, target) {
//   let ret = 0,
//     n = nums.length;
//   const dfs = (nums, target, cur, level) => {
//     if (n === level) {
//       if (cur === target) {
//         ret++;
//       }
//       return;
//     }
//     const num = nums[level];
//     level++;
//     dfs(nums, target, cur + num, level);
//     dfs(nums, target, cur - num, level);
//   };

//   dfs(nums, target, 0, 0);
//   return ret;
// };

// var findTargetSumWays = function (nums, target) {
//   let sum = nums.reduce((a, b) => a + b, 0),
//     n = nums.length;
//   if ((sum - target) & 1 || sum - target < 0) return 0;
//   sum = (sum - target) / 2;
//   console.log(sum);
//   const dp = new Array(n + 1).fill(0).map((a) => new Array(sum + 1).fill(0));
//   dp[0][0] = 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= sum; j++) {
//       if (j < nums[i - 1]) {
//         dp[i][j] = dp[i - 1][j];
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
//       }
//     }
//   }
//   return dp[n][sum];
// };

var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((a, b) => a + b, 0),
    n = nums.length;
  if ((sum - target) & 1 || sum - target < 0) return 0;
  sum = (sum - target) / 2;
  const dp = new Array(sum + 1).fill(0);
  dp[0] = 1;
  for (let num of nums) {
    for (let j = sum; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[sum];
};

console.log(
  findTargetSumWays(
    [1,1,1,1,1],
    3
  )
);
