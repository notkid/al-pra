/**
 *
 * 1. 两数之和
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    nums.sort((a, b) => a- b)
    let lo = 0
    let hi = nums.length - 1
    while(lo < hi) {
        let result = nums[lo] + nums[hi]
        console.log(nums[lo], nums)
        if (result > target) {
            hi--
        } else if (result < target) {
            lo++
        } else if (result === target) {
            return [lo, hi]
        }
    }
    return []
};

console.log(twoSum([3,2,4], 6));
