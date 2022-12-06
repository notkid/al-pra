/**
 * 剑指 Offer 53 - II. 0～n-1中缺失的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let ans= 0
    for(let i = 0; i<nums.length; i++) {
        ans ^= i
        ans ^= nums[i]
    }
    ans ^=nums.length
    return ans
};