/**
 * 
 * 
 * 
 * 
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let l = 0, r = -1
    while(r++<nums.length) {
        console.log([nums[r], nums[l]])
        if (nums[r]) {
            !nums[l] && ([nums[l], nums[r]] =[nums[r], nums[l]])
            l++
        }
    }
};

// const arr = [0,1,0,3,12]
// moveZeroes(arr)
// console.log(arr)

/**
 * 
 * 11. 盛最多水的容器
 * 
 */

var maxArea = function (height) {
    let left = 0, right = height.length - 1
    let result = 0
    while (left < right) {
        let curArea = Math.min(height[right], height[left]) * (right - left)
        result = Math.max(result, curArea)
        if (height[left] <= height[right]) {
            ++left
        } else {
            --right
        }
    }
    return result
};