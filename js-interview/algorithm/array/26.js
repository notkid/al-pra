/***
 * 26. 删除有序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
        slow++;
      nums[slow] = nums[fast]
    }
   
    fast++;
  }
  return slow + 1
};
