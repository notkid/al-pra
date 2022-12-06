/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const searchLeftHand = () => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid -1;
      }
    }
    return right +1;
  };

  const searchRightHand = () => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };
  return searchRightHand() - searchLeftHand() + 1;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
