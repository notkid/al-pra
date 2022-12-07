/**剑指 Offer 54. 二叉搜索树的第k大节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res = null;
  var dfs = function (node) {
    if (!node) return null;
    if (res) return;
    dfs(node.right);
    k--;
    if (k === 0) {
      res = node.val;
    }
    dfs(node.left);
  };
   dfs(root);
   return res
};
