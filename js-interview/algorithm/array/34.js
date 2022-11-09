/**
 * 
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    var leftBound = () => {
        let left = 0, right = nums.length - 1
        while(left <= right) {
            let middle = Math.floor(left + (right - left) / 2)
            if (nums[middle] < target) {
                left = middle + 1
            } else if (nums[middle] >target) {
                right = middle -1
            } else if (nums[middle] === target) {
                right = middle - 1
            }
        }
        if (left >= nums.length || nums[left] != target ) return -1
        return left
    }
    var rightBound = () => {
        let left = 0, right = nums.length - 1
        while(left <= right) {
            let middle = Math.floor(left + (right - left) / 2)
            if (nums[middle] < target) {
                left = middle  + 1
            }else if (nums[middle] > target) {
                right = middle -1 
            } else {
                left = middle + 1
            }
        }
        if (right < 0 || nums[right] != target) return -1
        return right
    }
    return [leftBound(), rightBound()]
};

console.log(searchRange([5,7,7,8,8,10], 8))