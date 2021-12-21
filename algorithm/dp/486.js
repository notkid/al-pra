/**
 * 
 * 486. 预测赢家
 * 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var PredictTheWinner = function(nums) {
    const n = nums.length,
    dp = new Array(n).fill(new Array(n).fill(0))
    nums.forEach((a, i) => dp[i][i] = a)
    for (let i = n -2;i >=0;i--) {
        for(let j = i+ 1; j < n;j++) {
            dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
        }
    }
    return dp[0][n -1 ] > 0
};

PredictTheWinner([1,5,2])