/**
 * 704. 二分查找
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor(left + (right - left ) / 2)
        if (nums[mid] < target) {
            left  = mid + 1
        } else if(nums[mid] > target) {
            right = mid - 1

        } else if(nums[mid] === target) {
            return mid
        }
    }
    return -1
};