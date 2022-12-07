/**
 * 剑指 Offer 57. 和为s的两个数字
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    nums.sort((a, b) => a- b)
    let lo = 0, hi = nums.length - 1
    while(lo < hi) {
        const sum = nums[lo] + nums[hi]
        if (sum > target) {
            hi--
        } else if (sum < target) {
            lo++
        } else {
            return [nums[lo], nums[hi]]
        }
    }
    return null
};