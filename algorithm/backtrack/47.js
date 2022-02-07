/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ret = [],
    n = nums.length,
    vis = new Array(n).fill(false),
    track = [];
  nums.sort();
  var backtrack = (nums, track, idx) => {
    if (idx === n) {
      ret.push(track.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (vis[i] || (i> 0 && nums[i] === nums[i - 1] && !vis[i-1] ) ) {
        continue;
      }
      track.push(nums[i]); 
      vis[i] = true
      backtrack(nums, track, idx + 1);
      vis[i] = false
      track.pop();
    }
  };

  backtrack(nums, track, 0);
  return ret;
};

console.log(permuteUnique([1,1,2]));
