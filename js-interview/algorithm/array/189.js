
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function (nums, k) {
    const newArr = []
    for (let i = 0; i < nums.length; i++) {
        const idx = (i + k) % nums.length
        newArr[idx] = nums[i]
    }
    for (let i = 0; i < nums.length; ++i) {
        nums[i] = newArr[i];
    }
};