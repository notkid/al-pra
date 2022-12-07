/**剑指 Offer 34. 二叉树中和为某一值的路
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const ret = [],
    stack = [];
  var dfs = function (node, target) {
    if (!node) {
      return;
    }
    target -= node.val;
    stack.push(node.val);
    if (!node.left && !node.right && target === 0) {
      ret.push(stack.slice());
      return;
    }
    dfs(node.left, target);
    dfs(node.right, target);
    stack.pop();
  };
  dfs(root, target);
  return ret;
};
