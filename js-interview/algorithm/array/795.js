/**
 * 795. 区间子数组个数
 *
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  const inBound = (i) => {
    return i >= left && i <= right;
  };

  let n = nums.length;
  let lo = 0,
    hi = 0,
    res = 0,
    max = Number.MIN_SAFE_INTEGER,
    lastMax = Number.MIN_SAFE_INTEGER;
  while (lo <= n) {
    // max  = Math.max(max, nums[hi])
    if (max >= nums[hi]) {
      // lastMax =
    } else {
      lastMax = max;
      max = nums[hi];
    }
    if (inBound(max)) {
      hi++;
      res++;
    } else {
      hi += 1;
      lo = hi;
      max = lastMax;
    }
    console.log(lo, hi, res);
  }
  return res;
};

var numSubarrayBoundedMax2 = function (nums, left, right) {
    let i1 = -1, i2 = -1, res = 0
    for(let i = 0; i< nums.length; i++) {
        if (nums[i] > right) {
            i2 = i
            i1 =-1
        } else if   (nums[i] >= left && nums[i] <= right) {
            i1 = i
        }
        if (i1 !== -1 ) {
            res += i1 - i2
        }
    }
    return res
 }

console.log(numSubarrayBoundedMax2([2,9,2,5,6], 2, 8));
