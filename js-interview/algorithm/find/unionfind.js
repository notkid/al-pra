/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        let left = 0 , right = nums.length - 1
    
        while(left <= right ) {
            let mid = left + ((right - left) >> 1 )
            let midNum = nums[mid]
            if (midNum === target) {
                right = mid - 1
            } else if (midNum > target) {
                right = mid -1 
            } else if (midNum <target) {
                left = mid + 1 
            }
        }
    
        return left
    };