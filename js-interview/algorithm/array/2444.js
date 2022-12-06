/**
 * 2444. 统计定界子数组的数目
 */

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  if (minK > maxK) return 0;
  let minIndex = -1,
    maxIndex = -1,
    pre = 0,
    notIndex = -1,
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minK) {
      minIndex = i;
    }
    if (nums[i] === maxK) {
      maxIndex = i;
    }

    if (nums[i] === minK) {
      pre = maxIndex - notIndex;
    } else if (nums[i] === maxK) {
      pre = minIndex - notIndex;
    } else if (nums[i] < minK || nums[i] > maxK) {
      pre = 0;
      notIndex = i;
    }
    maxIndex = Math.max(maxIndex, notIndex);
    minIndex = Math.max(minIndex, notIndex);
    ans += pre;
  }
  return ans;
};
