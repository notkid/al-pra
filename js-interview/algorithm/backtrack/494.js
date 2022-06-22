/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let ans = 0,
    n = nums.length;

  const backtrack = (nums, target, start) => {
    if (start === n) {
      if (target === 0) {
        ans++;
      }
      return;
    }
    // console.log(nums, target, start)
    backtrack(nums, target - nums[start], start + 1);

    backtrack(nums, target + nums[start], start + 1);
  };

  backtrack(nums, target, 0);

  return ans;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
