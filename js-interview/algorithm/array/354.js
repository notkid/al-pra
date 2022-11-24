/**
 *
 * 354. 俄罗斯套娃信封问题
 *
 */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  let height = envelopes.map((envelope) => envelope[1]);
  return lengthOfLIS2(height);
};

function lengthOfLIS2(nums) {
  let piles = 0,
    n = nums.length;
  let top = new Array(n);
  for (let i = 0; i < n; i++) {
    // 要处理的扑克牌
    let poker = nums[i];
    let left = 0,
      right = piles;
    // ⼆分查找插⼊位置
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (top[mid] >= poker) right = mid;
      else left = mid + 1;
    }
    if (left == piles) piles++;
    // 把这张牌放到牌堆顶
    top[left] = poker;
  }
  // 牌堆数就是 LIS ⻓度
  return piles;
}
var lengthOfLIS = function (nums) {
  // f(6) = f(5)
  const n = nums.length;
  let ans = 0;
  const dp = new Array(n).fill(1);

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    ans = Math.max(dp[i], ans);
  }
  return ans;
};
