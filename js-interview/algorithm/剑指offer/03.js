/**
 * 剑指 Offer 03. 数组中重复的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function (nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === i) {
            i++
            continue
        }
        if (nums[nums[i]] === nums[i]) { return nums[i] } else {
            [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
        }

    }
    return -1
};