/**
 * 1775. 通过最少操作次数使数组的和相等

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const n = nums1.length,
    m = nums2.length;
  if (6 * n < m || 6 * m < n) {
    return -1;
  }
  const cn1 = new Array(7).fill(0);
  const cn2 = new Array(7).fill(0);
  let diff = 0;
  for (let num of nums1) {
    cn1[num]++;
    diff += num;
  }
  for (let num of nums2) {
    cn2[num]++;
    diff -= num;
  }
  if (diff === 0) {
    return 0;
  }
  if (diff > 0) {
    return helper(cn2, cn1, diff);
  }
  return helper(cn1, cn2, -diff);
};

function helper(h1, h2, diff) {
  const h = new Array(7).fill(0);
  for (let i = 1; i < 7; i++) {
    h[6 - i] += h1[i];
    h[i - 1] += h2[i];
  }
  let res = 0;
  for (let i = 5; i > 0 && diff > 0; i--) {
    let t = Math.min(Math.floor((diff + i - 1) / i), h[i]);
    res += t;
    diff -= t * i;
  }
  return res;
}
