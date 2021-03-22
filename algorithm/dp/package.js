/*
 * @Author: your name
 * @Date: 2021-03-22 19:44:35
 * @LastEditTime: 2021-03-22 19:59:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\algorithm\dp\package.js
 */


/**
 * 
 * 416. 分割等和子集
 * 
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0, n = nums.length
    nums.forEach((num) => sum += num)
    if (sum % 2 !== 0) return false
    sum = sum / 2

    dp[0] = true
    for (let i = 0; i < n; i++) {
        for (let j = sum; j >= 0; j--) {
             if (j - nums[i] >= 0) {
                 dp[j] = dp[j] || dp[j -nums[i]]
             }
        }
    }
    return dp[sum]
};