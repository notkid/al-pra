/**
 *
 * 81. 搜索旋转排序数组 II
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let l = 0,
    n = nums.length,
    r = n - 1;
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return nums[0] === target;
  }
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (target === nums[mid]) {
      return true;
    }
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      ++l;
      --r;
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false;
};
