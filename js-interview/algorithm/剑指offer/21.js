/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let left = 0, right = nums.length -1
    while(left < right) {
        while(left< right && nums[left] % 2 === 1) {
            left++
        }
        while(left< right && nums[right] % 2 === 0) {
            right--
        }
        if (left < right) {
            let tmp = nums[right]
            nums[right] = nums[left]
            nums[left] = tmp
            left++
            right--
        }
    }
    return nums
};