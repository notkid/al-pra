/**
 * 
 * 53. 最大子数组和
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {

     let n = nums.length
    let  dp = new Array(n).fill(0)
    dp[0] = nums[0]
    for(i =1; i<n ;i ++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
    }
    let res = Number.MIN_SAFE_INTEGER
    for(let i =0; i< n;i ++) {
        res = Math.max(res, dp[i])
    }
    return res
};