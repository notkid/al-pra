/*
 * @Author: your name
 * @Date: 2021-03-22 19:44:35
 * @LastEditTime: 2021-03-23 17:39:50
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

    const dp = new Array(sum + 1).fill(false)
    dp[0] = true
    for (const num of nums) {
        for (let j = sum; j >= 0; j--) {
            if (j - num >= 0) {
                dp[j] = dp[j] || dp[j - num]
            }
        }
    }
    return dp[sum]
};

/**
 * 
 * 494. 目标和
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    let count = 0
    function calculate(nums, i, sum, S) {
        if (i === nums.length) {
            if (sum === S) {
                count++
            }
            return
        } else {
            calculate(nums, i + 1, sum + nums[i], S)
            calculate(nums, i - 1, sum - nums[i], S)
        }
    }
    calculate(nums, 0, 0, S)
    return count
};

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))

function findTargetSumWays2(nums, S) {

}

// 
let arr = []
function dp(level, parentChoice) {
    if (level === 0) {
        arr.push(parentChoice)
        return
    }
    ['A', 'B', '', 'D'].forEach(a => {
        dp(level - 1, parentChoice + a)
    })
}
// dp(6, '')
// let a = arr
//     .filter(a => !a.includes('D'))
//     .map(a => a.replace('D', ''))
//     .filter(a => a.length >= 3)
// console.log(a.length / arr.length)