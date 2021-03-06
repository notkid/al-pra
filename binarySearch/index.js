/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x
    while(left <= right) {
       let mid = left + (( right - left) >> 1)
       if (mid * mid === x) {
           return mid
       } else if (mid * mid < x) {
           left = mid +1
       } else {
           right = mid - 1
       }
    }
    return right
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0 , right = nums.length - 1, ans = nums.length

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