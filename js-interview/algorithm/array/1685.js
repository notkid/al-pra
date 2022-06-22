/**
 * 1685. 有序数组中差绝对值之和
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getSumAbsoluteDifferences = function(nums) {
    let ans = new Array(nums.length).fill(0)
    let n = nums.length
    ans[0] = nums.reduce((a,b) => a + b, 0) - n* nums[0]
    for (let i =1;i < n ;i++) {
        d = nums[i] - nums[i-1]
        ans[i] = ans[i-1] - (n - 2 * i) * d
    }
    return ans
};