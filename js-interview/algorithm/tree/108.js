/**
 *
 *
 * 108. 将有序数组转换为二叉搜索树
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var helper = (nums, left, right) => {
  if (left > right) return null;

  const mid = left + ((right - left) >> 1);
  const root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
  return root;
};
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};
