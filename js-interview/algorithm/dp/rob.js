/**
 *
 *
 *
 * @param {*} nums
 */
function rob1(nums) {
  let dp0 = (dp1 = 0);
  for (let i = nums.length - 1; i >= 0; i--) {
    let dp = Math.max(dp1, dp0 + nums[i]);
    dp0 = dp1;
    dp1 = dp;
  }
  return dp1;
}

function rob2(nums) {
  return Math.max(
    robByRange(nums, 0, nums.length - 2),
    robByRange(nums, 1, nums.length - 1)
  );
}

function robByRange(nums, start, end) {
  let dp0 = (dp1 = 0);
  for (let i = end; i >= start; i--) {
    let dp = Math.max(dp1, dp0 + nums[i]);
    dp0 = dp1;
    dp1 = dp;
  }
  return dp1;
}

function rob3(root) {
  const dfs = (root) => {
    if (root === null) {
      return [0, 0];
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    let rob = root.value + left[0] + right[0];
    let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [notRob, rob];
  };
}

let test = [2, 3, 2];

// let res = rob2(test);
// console.log(res);

// 20210324
// exercise
function robTest1(nums) {
  let dp0 = (dp1 = 0);
  for (let i = nums.length - 1; i >= 0; i--) {
    let dp = Math.max(dp1, dp0 + nums[i]);
    dp0 = dp1;
    dp1 = dp;
  }
  return dp1;
}
// console.log(robTest1([2,3,2]))
function robTest2(nums) {
  return Math.max(
    robTest2ByRange(nums, 0, nums.length - 2),
    robTest2ByRange(nums, 1, nums.length - 1)
  );
}

function robTest2ByRange(nums, start, end) {
  let dp0 = (dp1 = 0);
  for (let i = end; i >= start; i--) {
    let dp = Math.max(dp1, dp0 + nums[i]);
    dp0 = dp1;
    dp1 = dp;
  }
  return dp1;
}
// console.log(robTest2([2,3,2,3]))

function robTest2ByTree(root) {

  const dfs = (root) => {
    if (!root) return [0, 0]

    let left = dfs(root.left)
    let right = dfs(root.right)

    let notRob = Math.max(left[0], left[1]) + Math.max(right[0] + right[1])
    let rob = root.val + left[0] + right[0]

    return [notRob, rob]
  }
  return Math.max(dfs(root)[0], dfs(root)[1])
}