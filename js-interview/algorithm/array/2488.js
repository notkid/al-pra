/**
 * 2488. 统计中位数为 K 的子数组
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {

  const sum = [];
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {index = i}
    sum[i] = nums[i] > k ? 1 : nums[i] === k ? 0 : -1;
  }
  const prefixSum = new Array(nums.length + 1).fill(0)
  for(let i = 1; i < prefixSum.length; i++) {
      prefixSum[i] = prefixSum[i-1] + sum[i-1]
  }
  let ans = 0,pos = {}
  for(let i =0; i < prefixSum.length; i++) {
    const n = prefixSum[i]
    if (i<=index) {
        pos[n] = (pos[n] ?? 0)  +1
        continue
    }
    ans += (pos[n] ?? 0)
    ans += (pos[n-1]?? 0)
  }
  return ans
};
